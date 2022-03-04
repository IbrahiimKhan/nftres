import React from 'react';
import { useTime } from 'react-timer-hook';
import eth from '../assets/eth.png'
import Timer from './Timer';

const SideNft = ({ project: { name, image,person1,stock} }) => {
    return (
        <div className="projectrCard lovely_card_project ">
           <div>
               <div className="row">
                   <div className="col-md-5">
                   <figure className="projectCard__wrapper">
                <a target="_blank" rel="noopener noreferrer" >
                    <img  src={image} alt={name} className="projectCard__image img-fluid" />
                </a>   
            </figure>
                   </div>

                        <div className="col md-7">
                        <div >
            <h6>{name}</h6>
            <div className='d-flex'>
            <div className="person">
          <div className='d-flex'>
          
           
                   <img className='img-fluid' src= {person1} alt="" />
                   <div className='d-flex  align-items-center justify-content-center'>
         <div className='d-flex align-items-center green-round'>  <img src={eth} alt="" className='img-fluid' />
         <p className='{}'>0.25 ETH</p>
        
         </div>    
         <p>1 of {stock}</p> 
           </div>
          
                </div>
                <div>
              
           <button  className='btn btn1 btn2 my-3'>Place a bid</button>
           </div>
           </div>
           
          </div>
          </div>
         </div>    
         </div>
           </div>  
        </div >
    );
};

export default SideNft;