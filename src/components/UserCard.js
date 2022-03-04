import React from 'react';
import { useTime } from 'react-timer-hook';
import eth from '../assets/eth.png'
import Timer from './Timer';

const UserCard = ({ project: { name, image,person1,stock} }) => {
    return (
        <div className="projectrCard  lovely_card_project ">
            <div className="projectCard__wrapper">
               
                    <img  src={image} alt={name} className="projectCard__image" style={{width:"100%"}} />
              
               
               
            </div>
          <div className='d-flex mt-3 align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
           <div className="person mr-2">
                   <img className='img-fluid ' src= {person1} alt="" />
                </div>
             <div className="projectCard__title">
                  <h4 >  {name}</h4>
                   <p> {stock} in stock</p>
                </div>
           </div>
           <div><p>Highest Bid</p>
           <div className='d-flex align-items-center justify-content-center'>
           <img src={eth} alt="" className='img-fluid' />
                    <p className='eth_p'>0.25 ETH</p>
           </div>
           
           </div>
          </div>
           


        </div >
    );
};

export default UserCard;