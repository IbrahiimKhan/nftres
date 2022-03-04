import React from 'react'
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
         <section
             className="d-flex justify-content-between"
             
             >
      <div>
        <a href="" className=" me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className=" me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className=" me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className=" me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className=" me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className=" me-4">
          <i className="fab fa-github"></i>
        </a>
      </div>

    </section>
  
    <section className="">
      <div className="container text-center text-md-start mt-5">

        <div className="row mt-3">

          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           

          <Link className="navbar-brand logo" to="/">NFTERS</Link>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
              
                />
            <p className='py-3'>
             The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
             buy,sell, and discover exclusive digital items.
            </p>
            <div>
                 <a href=""> <img style={{marginRight:"10px"}} className='img-fluid' src={facebook} alt="" /></a>
                  <a href=""><img style={{marginRight:"10px"}} className='img-fluid' src={twitter} alt="" /></a>
                  <a href=""><img style={{marginRight:"10px"}} className='img-fluid' src={linkedin} alt="" /></a>
              </div>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Marketplace</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
             
                />
            <p>
              <a href="#!" className="">All NFTs</a>
            </p>
            <p>
              <a href="#!" className="">New</a>
            </p>
            <p>
              <a href="#!" className="">Art</a>
            </p>
            <p>
              <a href="#!" className="">Sports</a>
            </p>
            <p>
              <a href="#!" className="">Utility</a>
            </p>
            <p>
              <a href="#!" className="">Music</a>
            </p>
            <p>
              <a href="#!" className="">Domain Name</a>
            </p>
          </div>


  
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold">My Account</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
               
                />
            <p>
              <a href="#!" className="">Profile</a>
            </p>
            <p>
              <a href="#!" className="">Favourite</a>
            </p>
            <p>
              <a href="#!" className="">My Collections</a>
            </p>
            <p>
              <a href="#!" className="">Settings</a>
            </p>
          </div>
      

         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
            <h6 className="text-uppercase fw-bold">Stay in the loop</h6>
            <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
               
                />
            <form id="search-form_3">
                <input type="text" className="search_3"/>
                <input type="submit" className="submit_3" value="Subscribe" />
            </form>
          </div>

        </div>
      </div>
      
      <div
         className="text-center p-3"
         style={{borderTop:"1px solid rgba(0, 0, 0, 0.09)"}}
        
         >
      <a 
         > Copyright © 2022 Avi Yansah</a
        >
    </div>
    </section>
    
    </div>
  )
}

export default Footer