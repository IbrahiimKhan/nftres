import React from 'react';
import eth from "../assets/eth.png"


const CollectionCard = ({ project: {number, name, image,percentage,amount} }) => {
    return (
        <div className="lovely_card_project mt-3">
            
                <div className="main_col d-flex justify-content-around align-items-center">
                    <h4>{number}</h4>
                  <div>
                    <figure><img src={image} alt="" /></figure>
                  </div>
               
                    <div>
                      <h3>{name}</h3>
                      <div className='d-flex align-items-center justify-content-center'>
                        <img src={eth} alt="eth"  style={{
                          marginRight:"10px"
                        }}/>
                        <h3  style={{marginBottom:0}}>{amount}</h3>
                      </div>
                    </div>
                    <div>
                      <p style={{fontWeight:"bold",color:"#14C8B0"}}>{percentage}</p>
                    </div>
                 
            </div>

        </div >
    );
};

export default CollectionCard;