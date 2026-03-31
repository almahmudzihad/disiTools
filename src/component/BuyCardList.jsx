import React from 'react'
import { toast } from 'react-toastify';

function BuyCardList({cardBuy, setCardBuy}) {
    const totalPrice = cardBuy.reduce((sum, item)=> sum + item.price, 0);
    const handelPayment = ()=>{
        setCardBuy([]);
        toast.success('Proceed to Checkout');
        
    }
    const handelDelete = (card) =>{
        const filterArray = cardBuy.filter(c => c.name !== card.name);
        setCardBuy(filterArray);
        toast.error('Remove the item');
        
    }
    return (
        <div>
           <div className="card  shadow-sm border border-gray-200">
                <div className="card-body">
                    <h2 className='text-2xl font-bold'>Your card</h2>
                    {
                        cardBuy.length === 0?
                            <p className='text-center text-2xl font-bold py-5'>Card is emty</p>
                        :
                            <>
                            {
                                cardBuy.map(card =>
                                    <div key={card.name} className='mt-2'>
                                        <div className="card bg-[#f9fafc] card-xs shadow-sm">
                                            <div className="card-body flex-row justify-between">
                                                <div className='flex gap-3'>
                                                    
                                                        <span className='text-5xl'>{card.icon}</span>
                                                    
                                                    
                                                    <div>
                                                        <h2 className="text-xl font-bold">{card.name}</h2>
                                                        <p className='py-2'>${card.price}</p>
                                                    </div>
                                                </div>
                                                
                                                <button 
                                                onClick={()=>handelDelete(card)}
                                                className="text-red-500 hover:font-bold">Remove</button>
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
                                    <button 
                                    onClick={handelPayment}
                                    className="btn text-white btn-block  rounded-full bg-linear-to-r from-[#4f39fb] to-[#9514fa]">Proceed to Checkout</button>
                                </div>
                            </>
                        
                    }
                    
                </div>
                </div>
        </div>
    )
}

export default BuyCardList
