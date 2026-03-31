import React, { use, useState } from 'react'
import Card from './Card';
import BuyCardList from './BuyCardList';
//import BuyCardList from './BuyCardList';

function PremiumTools({cardData}) {
    const card = use(cardData);
    const [tabName, setTabName] =useState('products');
    const [cardBuy, setCardBuy] = useState([]);
    
    
    
    return (
        <div className='container mx-auto'>
            <div className='py-10 text-center'>
                <h1 className='text-4xl font-bold py-4'>Premium Digital Tools</h1>
                <p className='text-gray-500 '>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                
            </div>
            <div className='pb-6'>
                <div className="tabs tabs-box justify-center bg-transparent">
                <input type="radio" name="my_tabs_1" className="tab " aria-label="Products"
                 onClick={()=>setTabName('products')}
                 defaultChecked/>

                <input type="radio" name="my_tabs_1" className="tab" aria-label={`Card ${cardBuy.length}`} 
                 onClick={()=>setTabName('card')}
                />
                
                </div>
            </div>
            { tabName === 'card' &&  <BuyCardList cardBuy={cardBuy} setCardBuy={setCardBuy} />
            }
            <div className='cardBox grid md:grid-cols-3 gap-3'>
                
                {
                  tabName === 'products' && 
                    card.map(data => <Card key={data.name} data={data} setCardBuy={setCardBuy} cardBuy={cardBuy} />)
                }

            </div>
            
        </div>
    )
}

export default PremiumTools
