import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
          <h1>Find the right <i>experts</i> for discovery calls</h1>
          <p>(X for Y analogy: <b>pioniir = airbnb for expert knowledge</b> -- marketplace for expert knowldge)</p>
          <p>We help you quickly find and book <b>verified expert knowledge</b> to conduct discovery calls with and validate your business idea faster.</p>
          <div className="search">
            <div className="searchInput">
              <img src="img/search.png" alt="" />
              <input type="text" placeholder='try finding "MRO Buyer"'/>
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular Categories:</span>
            <button>Finance</button>
            <button>Ecommerce</button>
            <button>Education</button>
            <button>Product</button>
          </div>
        </div>
        <div className="right">
          <img src="img/man.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured