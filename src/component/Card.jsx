import React, { useState } from 'react'


function Card({data}) {
    const [isBuy, setIsBuy] = useState(false);
 
    return (
         <div className="card w-96  shadow-sm bg-[#f9fafc] ">
                            <div className="card-body text-left  relative">
                                <span className="badge badge-xs badge-warning absolute right-3 top-3">{data.tagType}</span> 
                                <p className='text-3xl'>{data.icon}</p>
                                <div className="space-y-5">
                                    <h2 className="text-3xl font-bold">{data.name}</h2>
                                    <p className='text-gray-500'>{data.description}</p>
                                    <span className="text-xl">{data.price}</span><span className='text-gray-500'>/{data.period}</span>
                                
                                </div>
                                
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>{data.features[0]}</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>{data.features[1]}</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-gray-500'>{data.features[2]}</span>
                                </li>
                                
                                </ul>
                                <div className="mt-6">
                                <button 
                                onClick={()=>setIsBuy(true)}
                                className={`btn  btn-block  rounded-full text-white ${isBuy? "bg-green-500" :"bg-linear-to-r from-[#4f39fb] to-[#9514fa]"}`}
                                >{isBuy ?<p> <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Added to Card </p>: data.button }</button>
                                </div>
                            </div>
                         </div>
                         //"btn  btn-block  rounded-full text-white"bg-linear-to-r from-[#4f39fb] to-[#9514fa]
    )
}

export default Card
