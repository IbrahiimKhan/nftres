import React, { useState } from 'react';
import data_projects from './Userdata'
import ProjectCard from './FeaturedCard';
import SideFeatured from './SideFeatured';
const Featured = () => {
    const [projects, setProjects] = useState(data_projects)
    return (
        <>
     

     <section id="header" className='py-5'>
       <div className="container-fluid nav_bg" style={{padding:0}}>
           <div className="row ">
                           <div className="col-md-9">
                           {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />).splice(0,1,2,3,)
                } 
                           </div>
                           <div className="col-md-3 clf">
                           {
                    projects.map(project =>
                        <SideFeatured key={project.name} project={project} />).splice(1)
                }
                
                           </div>
                       </div>
                      
                   </div>
                   <div className="col-md-4 pt-5 pt-lg-0 order-1 order-lg-2 header_img">
                  
              
       </div>
   </section>
           
        </>
    );
};

export default Featured;