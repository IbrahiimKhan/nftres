import React, { useState } from 'react';
import data_projects from './Userdata'
import ProjectCard from './UserCard';
import SideNft from './SideNft';
import Collection from "./Collection"
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
       <div className="container-fluid nav_bg">
           <div className="row">
               <div className="col-10 mx-auto">
                   <div className="row">
                   <div className="col-lg-8 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                       <div className="row">
                           <div className="col-md-6 user_1">
                           {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />).splice(0,1,2,3,)
                } 
                           </div>
                           <div className="col-md-6 user_2">
                           {
                    projects.map(project =>
                        <SideNft key={project.name} project={project} />).splice(1)
                }
                           </div>
                       </div>
                      
                   </div>
                   <div className="col-lg-4 col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header_img">
                       <div className='txt'>  <h2>Top Collection Over</h2>
        <p style={{fontWeight:"bold",color:"#3d00b7"}} className="my-2">Last 7 days</p></div>
                 
                  <Collection/>
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