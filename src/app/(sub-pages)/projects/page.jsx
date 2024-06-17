import { getProjectSlugs, getProject } from '@/functions/project-markdown';
import { Header } from '@/components/header';
import { Content } from '@/components/content';
import ProjectCard from '@/components/project-card';
import Image from 'next/image';

export default async function ProjectsPage() {
  const slugs = getProjectSlugs();
  const projects = await Promise.all(slugs.map(slug => getProject(slug)));

  const currentProjects = projects.filter(project => project.meta.status === 'current');
  const dormantProjects = projects.filter(project => project.meta.status === 'dormant');
  const incubatingProjects = projects.filter(project => project.meta.status === 'incubating');

  return (
    <>
      <Header>
        <h1 className="text-4xl font-bold">Projects</h1>
      </Header>
      <Content>
        <section>
          <div className="flex items-center space-x-2 mb-4 mt-4">
            <Image src="/image/active.png" alt="active" width={32} height={32}/>
            <h2 className="text-2xl font-semibold">Active Projects</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProjects.length > 0 ? (
              currentProjects.map(project => (
                <ProjectCard key={project.meta.slug} project={project} />
              ))
            ) : (
              <div className="col-span-2 lg:col-span-3 text-center">No active projects available</div>
            )}
          </div>
        </section>
        <section className="mt-12">
          <div className="flex items-center space-x-2 mb-4 mt-4">
            <Image src="/image/dormant.png" alt="dormant" width={32} height={32}/>
            <h2 className="text-2xl font-semibold">Dormant Projects</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {dormantProjects.length > 0 ? (
              dormantProjects.map(project => (
                <ProjectCard key={project.meta.slug} project={project} />
              ))
            ) : (
              <div className="col-span-2 lg:col-span-3 text-center">No dormant projects available</div>
            )}
          </div>
        </section>
        <section className="mt-12">
          <div className="flex items-center space-x-2 mb-4 mt-4">
            <Image src="/image/incubating.png" alt="incubating" width={32} height={32}/>
            <h2 className="text-2xl font-semibold">Incubating Projects</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {incubatingProjects.length > 0 ? (
              incubatingProjects.map(project => (
                <ProjectCard key={project.meta.slug} project={project} />
              ))
            ) : (
              <div className="col-span-2 lg:col-span-3 text-center">No incubating projects available</div>
            )}
          </div>
        </section>
      </Content>
    </>
  );
}