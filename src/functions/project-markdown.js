import { readFileSync, existsSync } from "fs";
import { globSync } from "glob";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import readingTime from "reading-time";
import { markdownComponents } from "@/components/snippets/markdown-components";

// Paths to project files and subpage files
const PROJECTS_PATH = path.join(process.cwd(), "src/projects-id");
const SUBPAGE_PATH = path.join(process.cwd(), "src/project-content");

// Get a list of project slugs
export function getProjectSlugs() {
  const paths = globSync(`${PROJECTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
}

// Fetch a project overview by slug
export async function getProject(slug) {
  const projectFilePath = path.join(PROJECTS_PATH, `${slug}.mdx`);

  if (!existsSync(projectFilePath)) {
    return null;
  }

  const source = readFileSync(projectFilePath, 'utf8');
  // Correctly compile the MDX content
  const { content, frontmatter } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
    components: {
      ...markdownComponents,
      NotProse: ({ children }) => <div className="not-prose">{children}</div>,
    },
  });


  const meta = {
    ...frontmatter,
    slug,
    readingTime: Math.ceil(readingTime(source).minutes),
  };

  return {
    content,
    meta
  };
}

// Fetch related subpages for a project
export async function getSubpages(project) {
  const paths = globSync(`${SUBPAGE_PATH}/${project}-*.mdx`);

  return await Promise.all(
    paths.map(async (filePath) => {
      // Ensure the file is read as a UTF-8 string
      const source = readFileSync(filePath, 'utf8');
      
      // Correctly compile the MDX content
      const { content, frontmatter } = await compileMDX({
        source,
        options: { parseFrontmatter: true },
        components: {
          ...markdownComponents,
          NotProse: ({ children }) => <div className="not-prose">{children}</div>,
        },
      });

      return {
        file: path.basename(filePath),
        content,
        meta: frontmatter
      };
    })
  );
}