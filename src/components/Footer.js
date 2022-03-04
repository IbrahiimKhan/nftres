import React from 'react'
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
         <section
             class="d-flex justify-content-between"
             
             >
      <div>
        <a href="" class=" me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class=" me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>

    </section>
  
    <section class="">
      <div class="container text-center text-md-start mt-5">

        <div class="row mt-3">

          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           

          <Link className="navbar-brand logo" to="/">NFTERS</Link>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
              
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

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Marketplace</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
             
                />
            <p>
              <a href="#!" class="">All NFTs</a>
            </p>
            <p>
              <a href="#!" class="">New</a>
            </p>
            <p>
              <a href="#!" class="">Art</a>
            </p>
            <p>
              <a href="#!" class="">Sports</a>
            </p>
            <p>
              <a href="#!" class="">Utility</a>
            </p>
            <p>
              <a href="#!" class="">Music</a>
            </p>
            <p>
              <a href="#!" class="">Domain Name</a>
            </p>
          </div>


  
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 class="text-uppercase fw-bold">My Account</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
               
                />
            <p>
              <a href="#!" class="">Profile</a>
            </p>
            <p>
              <a href="#!" class="">Favourite</a>
            </p>
            <p>
              <a href="#!" class="">My Collections</a>
            </p>
            <p>
              <a href="#!" class="">Settings</a>
            </p>
          </div>
      

         
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
            <h6 class="text-uppercase fw-bold">Stay in the loop</h6>
            <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
               
                />
            <form id="search-form_3">
                <input type="text" class="search_3"/>
                <input type="submit" class="submit_3" value="Subscribe" />
            </form>
          </div>

        </div>
      </div>
      
      <div
         class="text-center p-3"
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