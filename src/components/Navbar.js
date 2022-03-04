import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="contianer-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light mt-3 ">
  <div className="container-fluid">
    <Link className="navbar-brand logo" to="/">NFTERS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="#">Marketplace</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Recsource</Link>
        </li>

      </ul>
      <form className="d-flex ms-auto">
      <div class="searchBar">
    <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
    <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
      <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24"><path fill="#666666"
       d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,712,5 9.5,5Z" />
      </svg>
    </button>
  </div>
        
      </form>
      
        <div className="nav-btn-grp">
            <button className='btn btn1'>upload</button>
            <button className='btn btn1 btn2'>Connect Wallet</button>
        </div>

  
      
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar