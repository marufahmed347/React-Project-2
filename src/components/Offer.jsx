import React from 'react'

function Offer() {

    const OfferList = [
        {
            title:'Cardano Debit-Cards',
            description:'Cardano, simplified. The debit card that makes crypto spending easy.',
            icon:'f.png'
        },
        {
            title:'On & Off Ramp',
            description:'Fiat meets crypto, effortlessly buy, sell, and manage.',
            icon:'f.png'
        },
        {
            title:'Solutions for business',
            description:'Empowering businesses with effortless crypto payments and seamless fiat solutions.',
            icon:'f.png'
        }
    ]

  return (
    <>
    <section className='space-y-12'>
    <h2 className='font-bold leading-tight text-center text-2xl lg:text-3xl'>What do we offer?</h2>

    <div className='grid grid-cols-1  md:grid-cols-3 gap-8'>
        {
            OfferList.map((item, i)=>(
                <div key={i} className='flex gap-4'>

                    <div className=' flex items-center justify-center max-h-12 max-w-12 rounded-xl w-4/5'>
                    <img className='h-12 w-12' src={item.icon} alt="" />
                    </div>

                    <div>
                        <h4 className='font-bold text-lg'>{item.title}</h4>
                        <p className='text-secondary text-sm'>{item.description}</p>
                    </div>
                </div>
            ))
        }
    </div>
    </section>
    </>
  )
}

export default Offer