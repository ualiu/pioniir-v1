import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {

  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener('scroll', isActive)
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "urim aliu",
    isSeller: true
  }



  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          
          {/* <Link to="/"> }
          <span className='text'>pioniir</span>
          {/* </Link> */}
          <span className='text'>pioniir</span>
          <span className='dot'>.</span> 
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          { !currentUser?.isSeller && <span>Become a Pro</span> }
          { currentUser && <button>Join</button> }
          { currentUser && (
            <div className="user" onClick={() =>setOpen(!open)}>
              <img src='https://avatars.githubusercontent.com/u/103965667?s=40&v=4' alt='' />
              <span>{currentUser?.username}</span>
              { open && <div className="options">
                {
                  currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add new gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
              </div>}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
        <hr />
        <div className="menu">
          <span>test 1</span>
          <span>test 2</span>
        </div>
        </>
      )}
        
    </div>
    
  )
}

export default Navbar