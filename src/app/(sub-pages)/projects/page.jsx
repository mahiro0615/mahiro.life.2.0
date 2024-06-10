import { getProjectSlugs, getProject } from '@/functions/project-markdown';
import { Header } from '@/components/header';
import { Content } from '@/components/content';
import { ProjectCard } from '@/components/project-card';

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
          <h2 className="text-2xl font-semibold mb-4">Current Projects</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProjects.map(project => (
              <ProjectCard key={project.meta.slug} project={project} />
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Dormant Projects</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {dormantProjects.map(project => (
              <ProjectCard key={project.meta.slug} project={project} />
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Incubating Projects</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {incubatingProjects.map(project => (
              <ProjectCard key={project.meta.slug} project={project} />
            ))}
          </div>
        </section>
      </Content>
    </>
  );
}