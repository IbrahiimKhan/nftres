import React, { useState } from 'react';
import data_projects from './collectiondata'
import ProjectCard from './CollectionCard';
const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [active, setActive] = useState('All')


    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }

    const project_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

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