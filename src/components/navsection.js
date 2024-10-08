import React from 'react'
import { Link } from 'react-router-dom'

function Navsection() {
  return (
    
      <div className="flex justify-between fixed top-0 right-0 w-1/2  pt-12 px-14 www abt">
          <Link  to="/" className="clo text-2xl font-semibold relative ">Home</Link>
          <a href="www" className="clo text-2xl font-semibold relative ">About us</a>
          <a href="www" className="clo text-2xl font-semibold relative ">Skills</a>
          <a href="www" className="clo text-2xl font-semibold relative ">Works</a>
          <Link  to="/contact_us" className="clo text-2xl font-semibold relative" >Contact</Link>
        </div>
    
  )
}

export default Navsection;
