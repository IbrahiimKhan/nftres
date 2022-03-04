import React from 'react';
import { useTime } from 'react-timer-hook';
import Timer from './Timer';
import eth from "../assets/eth.png"

const NftCard = ({ project: { name, image,person1,person2,person3,person4 } }) => {
    return (
        <div className="projectrCard col-md-6 col-sm-6 lovely_card_project col-lg-3">
            <div className="projectCard__wrapper">
                <a target="_blank" rel="noopener noreferrer" >
                    <img src={image} alt={name} className="projectCard__image" />
                </a>
                <div className="person">
                   <img src= {person1} alt="" />
                   <img src= {person2} alt="" />
                   <img src= {person3} alt="" />
                   <img src= {person4} alt="" />
                </div>
                <div className="projectCard__title">
                    {name}
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center '>
                    <img src={eth} alt="" className='img-fluid' />
                    <p>0.25 ETH</p>
                </div>
                <div className="one_of">
                    1 of 321
                </div>
            </div>
            <div className="time">
                <Timer/>
            </div>


        </div >
    );
};

export default NftCard;