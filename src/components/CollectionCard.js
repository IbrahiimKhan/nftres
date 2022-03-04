import React from 'react';
import { useTime } from 'react-timer-hook';
import Timer from './Timer';
import eth from "../assets/eth.png"

const CollectionCard = ({ project: {number, name, image,percentage,amount} }) => {
    return (
        <div className="lovely_card_project">
            
                <div className="main_col d-flex justify-content-between align-items-center">
                    <h4>{number}</h4>
                  <div>
                    <figure><img src={image} alt="" /></figure>
                  </div>
               
                    <div>
                      <h3>{name}</h3>
                      <h3 >{amount}</h3>
                    </div>
                    <div>
                      <p style={{fontWeight:"bold",color:"#14C8B0"}}>{percentage}</p>
                    </div>
                 
            </div>

        </div >
    );
};

export default CollectionCard;