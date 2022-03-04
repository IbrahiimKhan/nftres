import React from 'react';
import Timer from './Timer';
import eth from "../assets/eth.png"

const NftCard = ({ project: { name, image,person1,person2,person3,person4 } }) => {
    return (
        <div className="projectrCard col-md-6 col-sm-6 lovely_card_project col-lg-3">
            <div className="projectCard__wrapper projectCard__wrapper1">
                <a target="_blank" rel="noopener noreferrer" >
                    <img src={image} alt={name} className="projectCard__image" />
                </a>
                <div className="person "style={{position:"relative"}}>
                    <img src="" alt="" />
                   <img className='person_be' style={{position:"absolute",left:"0%",top:"-100%"}} src= {person2}  alt="" />
                   <img className='person_be' style={{position:"absolute",left:"8%",top:"-100%"}} src= {person2} alt="" />
                   <img className='person_be' style={{position:"absolute",left:"17%",top:"-100%"}} src= {person3} alt="" />
                   <img className='person_be' style={{position:"absolute",left:"25%",top:"-100%"}} src= {person4} alt="" />
                </div>
                <div className="projectCard__title" style={{
                    fontWeight:"bold",
                    fontSize:"1.2rem",
                    margin:"1rem 0"
                }}>
                    {name}
                </div>
                <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center '>
                    <img src={eth} alt="" className='img-fluid' />
                    <p style={{color:"#00ac4f"
                ,marginLeft:".5rem",
                fontWeight:"700"
                }}>0.25 ETH</p>
                </div>
                <div className="one_of">
                    1 of 321
                </div>
            </div>
            <hr style={{color:"rgb(0 0 0 / 27%)"}}></hr>
            <div className="time">
                <Timer/>
            </div>
            </div>
           


        </div >
    );
};

export default NftCard;