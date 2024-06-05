import { Content } from "@/components/content";
import { Header } from "@/components/header";
import Link from 'next/link';
import path from 'path';
import fs from 'fs/promises';

export const metadata = {
  title: "Projects",
  description: "Things I am working on",
  alternates: {
    canonical: `/projects`,
  },
};

async function getProjects() {
  const projectsDirectory = path.join(process.cwd(), 'projects');
  try {
    const files = await fs.readdir(projectsDirectory);
    return files.map(file => file.replace('.mdx', ''));
  } catch (error) {
    console.error('Error reading projects directory:', error);
    return [];
  }
}

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8">
      <Header>
        <h1 className='block mb-6 text-2xl font-bold'>Projects</h1>
        <p className='font-Default'>
          Things I am working on
        </p>
      </Header>
      <Content>
        <ul>
          {projects.map((project) => (
            <li key={project}>
              <Link href={`/project/${project}`}>
                {project}
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </div>
  );
}