import '../styles/base/index.css';
import '../styles/components/index.css';
import '../styles/utilities/index.css';
import { projects } from '../data/projectsData';
import type { Project } from '../data/projectsData';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col bg-[#1a1d20] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#dce8f3]/10 transition-shadow duration-300">
      <div 
        className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover"
        style={{ backgroundImage: `url("${project.imageUrl}")` }}
      />
      <div className="flex flex-col gap-3 p-6">
        <h2 className="text-primary text-xl font-bold leading-tight tracking-[-0.015em]">
          {project.title}
        </h2>
        <p className="text-[#a2abb3] text-sm font-normal leading-relaxed">
          <strong className="text-[#c0c8d2]">Role:</strong> {project.role}
        </p>
        <p className="text-[#a2abb3] text-sm font-normal leading-relaxed line-clamp-3">
          <strong className="text-[#c0c8d2]">Overview:</strong> {project.overview}
        </p>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-wrap justify-between items-center gap-6 p-4 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-primary text-4xl md:text-5xl font-bold leading-tight">
            Featured Projects
          </h1>
          <p className="text-[#a2abb3] text-base md:text-lg font-normal leading-normal max-w-2xl">
            A selection of projects that highlight my skills and experience in development. 
            Each project includes a concise overview, my role, challenges, solutions, and outcomes.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-10 p-4 @container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
