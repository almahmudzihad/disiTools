import React from 'react'

function BuyCardList() {
    return (
        <div>
           <div className="card  shadow-sm border border-gray-200">
                <div className="card-body">
                    <h2 className='text-2xl'>your card</h2>
                    <div>
                        <div className="card bg-[#f9fafc] card-xs shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">Xsmall Card</h2>
                                <button className="text-red-500">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                    <button className="btn text-white btn-block rounded-full bg-linear-to-r from-[#4f39fb] to-[#9514fa]">Proceed to Checkout</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default BuyCardList
