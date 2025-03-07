import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-slate-800 w-full text-white md:px-16 lg:px-24'>
      <div className='container  grid grid-cols-1 lg:grid-cols-3 mx-32 my-14 py-10 gap-8'>
        <div className='text-xl font-semibold'>
          <h3>e-Shop</h3>
          <p>Your One-step fot all your needs. Shop with use and experience the best online shopping experiences.</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quik Links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to="/shop" className='hover:underline'>Shop</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:underline'>Contact</Link>
            </li>
            <li>
              <Link to='/about' className='hover:underline'>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href="" className='hover:text-gray-400'><FaFacebook/></a>
            <a href="" className='hover:text-gray-400'><FaSquareXTwitter/></a>
            <a href="" className='hover:text-gray-400'><FaGithub/></a>
            <a href="" className='hover:text-gray-400'><FaLinkedin/></a>
          </div>
          <form className='flex items-center justify-center mt-8' >
            <input  type="email" placeholder='Your email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600'/>
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 e-Shop All rights reserved</p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <a href="" className='hover:underline'>Privacy Policy</a>
            <a href="" className='hover:underline'>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer