import React from 'react'
import icon1 from "../assets/icon1.png"
import chart from "../assets/chart.png"

const Amazing = () => {
  return (
    <>
    <section id="header" className='py-5'>
       <div className="container-fluid nav_bg">
           <div className="row">
               <div className="col-10 mx-auto">
                   <div className="row">
                   <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1">
                       
                        <h1 className="amazing">the amazing nft art of the world here</h1>
                   </div>
                   <div className="col-md-8 pt-5 pt-lg-0 order-1 d-flex order-lg-2 header_img">
                     <div>
                         <div className='d-flex'>
                             <div className="icon">
                                 <figure><img src={icon1} alt="" /></figure>
                             </div>
                             <div className="iconright">
                                 <h4>Fast Transaction</h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                                 
                             </div>
                         </div>
                     </div>
                     <div>
                         <div className='d-flex'>
                             <div className="icon">
                                 <figure><img src={chart} alt="" /></figure>
                             </div>
                             <div className="iconright">
                                 <h4>Fast Transaction</h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>

                             </div>
                         </div>
                     </div>
                   </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
    </>
  )
}

export default Amazing