import React from 'react'

function GetStart() {
    return (
        <div className='bg-[#f9fafc]'>
            <div className=' container mx-auto py-20'>
                <div className='py-16 text-center'>
                    <h1 className='text-3xl font-bold py-4'>Get Started in 3 Steps</h1>
                    <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='card-box grid md:grid-cols-3 gap-3'>
                <div className="card bg-base-100 w-96 shadow-sm relative text-center">
                    <p className='btn rounded-full bg-linear-to-t from-[#4f39fb] to-[#9514fa] text-white text-right w-10 m-3 absolute right-0'>1</p>
                    <div className='flex items-center justify-center'>
                    <figure className="p-4 rounded-full w-20 text-center  bg-[#e1e7ff] mt-16 ">
                        <img
                        src="/user.png"
                        alt="user Logo"
                        className="" />
                    </figure>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm relative text-center">
                    <p className='btn rounded-full bg-linear-to-t from-[#4f39fb] to-[#9514fa] text-white text-right w-10 m-3 absolute right-0'>2</p>
                    <div className='flex items-center justify-center'>
                    <figure className="p-4 rounded-full w-20 text-center  bg-[#e1e7ff] mt-16 ">
                        <img
                        src="/package.png"
                        alt="package Logo"
                        className="" />
                    </figure>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p className='text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm relative text-center">
                    <p className='btn rounded-full bg-linear-to-t from-[#4f39fb] to-[#9514fa] text-white text-right w-10 m-3 absolute right-0'>3</p>
                    <div className='flex items-center justify-center'>
                    <figure className="p-4 rounded-full w-20 text-center  bg-[#e1e7ff] mt-16 ">
                        <img
                        src="/rocket.png"
                        alt="rocket Logo"
                        className="" />
                    </figure>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default GetStart
