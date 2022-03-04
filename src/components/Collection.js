import React, { useState } from 'react';
import data_projects from './collectiondata'
import ProjectCard from './CollectionCard';
const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    
    return (
        <
        >
                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
                
        </>
    );
};

export default Projects;