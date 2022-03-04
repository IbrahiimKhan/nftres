import React from 'react'
import CountUp from 'react-countup';
import hero_img from "../assets/heroimg.png"


const Header = () => {
  return (
   <>
   <section id="header" className='py-5'>
       <div className="container-fluid nav_bg">
           <div className="row">
               <div className="col-10 mx-auto">
                   <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                       <h1 className='hero-header my-2'>discover,and collect digital art nfts</h1>
                       <p className='hero-p'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                       <button className='btn1 btn mt-3'>Explore Now</button>
                       <div className="count_div pt-3">
                           <div className="div1 d-flex">
                               <div className='counter'>
                               <h3><CountUp className='font-weight-bold' end={98} />k+</h3>
                               <small>Artwork</small>
                               </div>
                              <div className='counter'>
                              <h3><CountUp className='font-weight-bold' end={12} />k+</h3>
                               <small>Auction</small>
                              </div>
                              <div className='counter'>
                              <h3><CountUp className='font-weight-bold' end={15} />k+</h3>
                               <small>Artist</small>
                              </div>
                           </div>
                       </div>

                   </div>
                   <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header_img">
                       <img src={hero_img} alt="hero_img" className='img-fluid' />
                   </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
   </>
  )
}

export default Header