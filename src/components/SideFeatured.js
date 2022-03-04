import React from 'react';
const SideFeatured = ({ project: { name, image,person1,stock} }) => {
    return (
        <div className="projectrCard lovely_card_project ">
           <div>
 
                   <figure className="projectCard__wrapper">
                <a target="_blank" rel="noopener noreferrer" >
                    <img  src={image} alt={name} className="projectCard__image img-fluid" />
                </a>   
            </figure>
               
         </div>
         
         
        </div >
    );
};

export default SideFeatured;