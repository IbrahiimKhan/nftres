import React from 'react';

const FeatureCard = ({ project: { name, image,person1,stock} }) => {
    return (
        <div className="projectrCard  lovely_card_project ">
            <div className="projectCard__wrapper">
               
                    <img  src={image} alt={name} className="projectCard__image" style={{width:"100%"}} />
              
               
               
            </div>
          <div className='d-flex mt-3 align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
           
             <div className="projectCard__title">
                  <h4 >  {name}</h4>
                  <div className='d-flex align-items-center justify-content-center'>
                  <img src={person1} alt="" />
                  <p style={{
                    fontWeight:"500"
                  }}>Total {stock} items</p>
                  </div>
                </div>
           </div>
           
          </div>
           


        </div >
    );
};

export default FeatureCard;