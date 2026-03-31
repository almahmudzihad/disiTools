import React from 'react'


function NavBar({cardBuy}) {
    return (
        <div className='bg-base-100 shadow-sm'>
        <div className="navbar bg-base-100 shadow-b-sm container mx-auto">
           
            <div className="navbar-start">
                <a className=" text-3xl font-bold  bg-linear-to-r from-[#4f39fb] to-[#9514fa] bg-clip-text text-transparent">disiTools</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Product</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonial</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                
                
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost  btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="badge badge-sm indicator-item bg-red-500">{cardBuy.length}</span>
                        </div>
                    </div>
                    
                </div>
                <a >Login</a>
                <a className="btn rounded-full bg-linear-to-t from-[#4f39fb] to-[#9514fa] text-white">Get Started</a>
            </div>
            
        </div>
    </div>
    )
}

export default NavBar

