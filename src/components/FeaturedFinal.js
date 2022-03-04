import React from 'react'
import Featured from './Featured'
const FeaturedFinal = () => {
  return (
    <div>
        <div className="container-fluid featured_nftres">
            <div className="row">
                
                <div className="col-10 mx-auto">
                <div className="featured_heading">
                    <h2>collection Featured nfts</h2>
                    </div>
                <div className="row">
                <div className="col-md-4">
                    <Featured/>
                    </div>
                <div className="col-md-4">
                    <Featured/>
                    </div>
                <div className="col-md-4">
                    <Featured/>
                    </div>
                </div>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default FeaturedFinal