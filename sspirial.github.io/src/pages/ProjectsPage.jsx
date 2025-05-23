import React from 'react';

const ProjectsPage = () => {
  // Placeholder project data
  const projects = [
    {
      name: 'Project 1',
      description: 'Description of project 1.',
      technologies: 'React, Node.js, etc.',
      liveLink: '#',
      githubLink: '#',
      image: '', // Add path to project image
    },
    // Add more projects
  ];

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies}</p>
          <a href={project.liveLink}>Live Link</a>
          <a href={project.githubLink}>GitHub Link</a>
          <img src={project.image} alt={project.name} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
