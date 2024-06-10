import { getProject, getSubpages, getProjectSlugs } from '@/functions/project-markdown';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { markdownComponents } from '@/components/snippets/markdown-components';
import { Header } from '@/components/header';
import { Content } from '@/components/content';
import { classNames } from '@/functions/class-names';
import Link from 'next/link';
import { ProjectSubpageCard } from '@/components/project-subpage-card';

export default async function ProjectContentPage({ params }) {
  const { project } = params;
  const projectData = await getProject(project);
  const subpages = await getSubpages(project);

  if (!projectData) {
    return <div>Project not found</div>;
  }
  return (
    <>
      <Header>
        <div className={classNames("gap-x-2 mb-4 space-x-2")}>
          <h1 className="inline text-4xl font-bold">
            <Link href="/projects" className="font-normal text-xl hover:underline">projects</Link> / {projectData.meta.title}
          </h1>
        </div>
      </Header>
      <Content>
        <article className="max-w-full px-0 prose mt-6 md:prose-lg font-Default">
          {projectData.content}
        </article>
        <div className='pb-8 border-b gap-x-2 mb-4 space-x-2'></div>
        <h2 className="inline font-bold">Subpages</h2>
        <div className="space-y-6 mt-6">
          {subpages.map((subpage) => (
            <ProjectSubpageCard subpage={subpage} project={project} key={subpage.file} />
          ))}
        </div>  
      </Content>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map(slug => ({ project: slug }));
}