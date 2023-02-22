import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {

  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const {pathname} = useLocation()

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
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
          <span className='text'>pioniir</span>
          </Link>
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
                      <Link className='link' to="/mygigs">Gigs</Link>
                      <Link to="/add">Add new gig</Link>
                    </>
                  )}
                  <Link className='link' to="/orders">Orders</Link>
                  <Link className='link' to="/messages">Messages</Link>
                  <Link className='link' to="/logout">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !=="/") && (
        <>
        <hr />
        <div className="menu">
          <Link className='link menuLink' to="/">Graphic & Design</Link>
          <Link className='link menuLink' to="/">Video & Animation</Link>
          <Link className='link menuLink' to="/">Writting & Translation</Link>
          <Link className='link menuLink' to="/">AI Serivces</Link>
          <Link className='link menuLink' to="/">Digital Marketing</Link>
          <Link className='link menuLink' to="/">Music & Video</Link>
          <Link className='link menuLink' to="/">Programming & Tech</Link>
          <Link className='link menuLink' to="/">Business</Link>
          <Link className='link menuLink' to="/">Lifestyle</Link>
        </div>
        </>
      )}
        
    </div>
    
  )
}

export default Navbar