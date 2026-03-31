import React from 'react'

function BuyCardList({cardBuy, setCardBuy}) {
    const totalPrice = cardBuy.reduce((sum, item)=> sum + item.price, 0);
    return (
        <div>
           <div className="card  shadow-sm border border-gray-200">
                <div className="card-body">
                    <h2 className='text-2xl'>your card</h2>
                    
                    {
                        cardBuy.map(card =>
                                <div className='mt-2'>
                                    <div className="card bg-[#f9fafc] card-xs shadow-sm">
                                        <div className="card-body flex-row justify-between">
                                            <div className='flex gap-3'>
                                                
                                                    <span className='text-5xl'>{card.icon}</span>
                                                
                                                
                                                 <div>
                                                    <h2 className="text-xl font-bold">{card.name}</h2>
                                                    <p className='py-2'>{card.price}</p>
                                                </div>
                                            </div>
                                            
                                            <button className="text-red-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                        )
                    }
                    <div className='flex justify-between mt-4'>
                        <p>Total:</p>
                        <p className='text-right font-bold text-xl'>${totalPrice}</p>
                    </div>
                    

                    <div className="mt-6">
                        <button className="btn text-white btn-block  rounded-full bg-linear-to-r from-[#4f39fb] to-[#9514fa]">Proceed to Checkout</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default BuyCardList
