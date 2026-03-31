import React from 'react'

function ReadyTo() {
    return (
        <div className='bg-linear-to-r from-[#4f39fb] to-[#9514fa]'>
            <div className='py-20'>
            <div className='p-16 text-center'>
                <h1 className='text-4xl font-bold py-4 text-white'>Ready to Transform Your Workflow?</h1>
                 <p className='text-gray-300'>Ready to Transform Your Workflow? Join thousands of professionals who are already using Digitools to work smarter. <br></br>Start your free trial today.</p>
            </div>
            <div className='text-center'>
                <button className="btn  px-5 py-6 rounded-full bg-white">Explore Products</button>
                <button className="btn border-white btn-outline rounded-full text-white px-5 py-6 hover:text-black ml-2">View Pricing</button> 
            </div>
            <p className='text-gray-300 text-center pt-8'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    )
}

export default ReadyTo
