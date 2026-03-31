import React from 'react'

function Rating() {
    return (
        <div className='bg-linear-to-r from-[#4f39fb] to-[#9514fa] my-5'>
            <div className='container mx-auto md:flex justify-around text-white'>
                <div className='p-8'>
                    <h2 className='text-4xl font-bold p-4'>50k+</h2>
                    <p className='px-4'>Active Users</p>
                </div>
                <div className='p-8'>
                    <h2 className='text-4xl font-bold p-4'>200+</h2>
                    <p className='px-4'>Premium Tools</p>
                </div>
                <div className='p-8'>
                    <h2 className='text-4xl font-bold p-4'>4.9</h2>
                    <p className='px-4'>Rating</p>
                </div>
            </div>
        </div>
    )
}

export default Rating
