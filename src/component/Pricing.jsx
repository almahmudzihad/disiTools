import React from 'react'

function Pricing() {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='py-20 text-center'>
                    <div className="py-16">
                        <h1 className='text-4xl font-bold py-4'>Simple, Transparent Pricing</h1>
                        <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    </div>
                
                <div className="pricint-container grid md:grid-cols-3 gap-3 ">
                    <div className="card-item1 ">
                        <div className="card w-96  shadow-sm bg-[#f9fafc] h-full  ">
                            <div className="card-body text-left justify-around">
                                
                                <div className="">
                                <h2 className="text-3xl font-bold">Premium</h2>
                                <span className="text-xl">$0</span><span className='text-gray-500'>/Month</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>1 project per month</span>
                                </li>
                                
                                </ul>
                                <div className="mt-6">
                                <button className="btn bg-linear-to-t from-[#4f39fb] to-[#9514fa] btn-block rounded-full">Subscribe</button>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="card-item2 ">
                        <div className="card w-96 bg-linear-to-r from-[#4f39fb] to-[#9514fa] text-white shadow-sm">
                            <div className="card-body text-left">
                                <span className="badge badge-xs bg-[#fef3c6] p-3 absolute top-[-10px] left-[40%]">Most Popular</span>
                                <div className="">
                                <h2 className="text-3xl font-bold">Pro</h2>
                                <span className="text-xl">$29</span><span className='text-gray-300'>/Month</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advanced analytics</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                
                                </ul>
                                <div className="mt-6">
                                <button className="btn  btn-block rounded-full">Start Pro Trial</button>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="card-item3">
                        <div className="card w-96 bg-[#f9fafc] shadow-sm">
                            <div className="card-body text-left">
                                
                                <div className="">
                                <h2 className="text-3xl font-bold">Premium</h2>
                                <span className="text-xl">$99</span><span className='text-gray-500'>/Month</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>Custom branding</span>
                                </li>
                                
                                </ul>
                                <div className="mt-6">
                                <button className="btn bg-linear-to-t from-[#4f39fb] to-[#9514fa] btn-block rounded-full">Subscribe</button>
                                </div>
                            </div>
                            </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Pricing
