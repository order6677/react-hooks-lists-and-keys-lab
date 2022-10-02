import React from "react";
import ProjectItem from "projectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const ProjectItem = projects.map((project)=>(
    <ProjectItem
    name={project.name}
    about={project.about}
    technologies={project.technologies}
    key={project.id} />
   ));

   return (
    <div id="projects">
      <h2>My projects</h2>
      <div id="project-list">{ProjectItem}</div>
    </div>

    
  );
      
}

export default ProjectList;
