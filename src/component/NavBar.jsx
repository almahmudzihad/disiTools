import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";

function NavBar() {
    return (
        <div className='bg-base-100 shadow-sm'>
        <div className="navbar bg-base-100 shadow-b-sm container mx-auto">
           
            <div className="navbar-start">
                <a className=" text-3xl font-bold text-[#a350fb]">disiTools</a>
            </div>
            <div className="navbar-center ">
                <ul className="menu menu-horizontal px-1">
                <li><a>Product</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonial</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                
      
                <MdOutlineShoppingCart />
                <a >Login</a>
                <a className="btn rounded-full bg-linear-to-t from-[#4f39fb] to-[#9514fa] text-white">Get Started</a>
            </div>
            
        </div>
    </div>
    )
}

export default NavBar

