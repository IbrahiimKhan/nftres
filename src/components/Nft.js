import React, { useState } from 'react';
import data_projects from './NftData'
import ProjectCard from './NftCard';
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
        <>
        
<section id="header" className='py-5'>
       <div className="container-fluid ">
           <div className="row">
               <div className="col-10 mx-auto">
               <div className='up-head'><h1>discover more nfts</h1></div>
            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={
                    () => {
                        setProjects(data_projects)
                        setActive("All")

                    }


                }>All</div>
                <div className={active === 'art' && 'projects__navbar-active'} onClick={() => handleFilterCategory('art')}>art</div>
                <div className={active === 'celebraties' && 'projects__navbar-active'} onClick={() => handleFilterCategory('celebraties')}>celebraties</div>
                <div className={active === 'gaming' && 'projects__navbar-active'} onClick={() => handleFilterCategory('gaming')}>gaming</div>
                <div className={active === 'sport' && 'projects__navbar-active'} onClick={() => handleFilterCategory('sport')}>sport</div>
            </div>
                   <div className="row">
                   {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
                    <div className="load_mor">
                        <button className='btn btn1 btn2'>More NFTS</button>
                    </div>
                   </div>
               </div>
           </div>
       </div>
   </section>

              
        </>
    );
};

export default Projects;