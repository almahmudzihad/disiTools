import React from 'react'


function Hero() {
    return (
        <div>
            <div className="hero  min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src="/banner.png"
                className="max-w-sm rounded-lg w-1/2 "
                />
                <div className='w-1/2 space-y-3'>
                <p className='btn rounded-full text-[#a350fb] bg-[#e1e7ff]'><img src="/miniicon.png" alt="New" /> AI-Powered Tools Available</p>
                <h1 className="text-2xl md:text-6xl font-bold">Supercharge Your <br/>Digital Workflow</h1>
                <p className="py-3">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
                </p>
                <div>
                <button className="btn text-white px-5 py-6 rounded-full bg-linear-to-r from-[#4f39fb] to-[#9514fa]">Explore Products</button>
                <button className="btn btn-primary btn-outline rounded-full  px-5 py-6 ml-2">
                    <img src="/Play.png" alt="" />
                    Watch Demo</button> 
                </div>
                                                                            
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero
