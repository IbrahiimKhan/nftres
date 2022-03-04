import React from 'react'
import group from '../assets/group.png'

const Group = () => {
  return (
    <>
     <section id="Group" className='py-5'>
       <div className="container-fluid nav_bg">
           <div className="row">
               <div className="col-10 mx-auto">
                   <div className="row d-flex align-items-center">
                   <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 header_img">
                       <img src={group} alt="hero_img" className='img-fluid' />
                   </div>
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2">
                       <h2 className='hero-header my-2'>create and sell your nfts</h2>
                       <p className='hero-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                       <button className='btn1 btn mt-3'>Sign Up Now</button>
                   </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
    </>
  )
}

export default Group