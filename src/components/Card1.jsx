import React from 'react'
import { Button } from '@heroui/react'

function Card1() {
  return (
    <>
    <section className='flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center'>
        <div className='space-y-3 sm:space-y-6 sm:w-1/2'>
            <h2 className='font-bold leading-tight  text-2xl lg:text-3xl'>Wern Debit Card</h2>
            <p className='text-secondary text-sm lg:text-base w-full max-w-[420px]'>More than just a card, it's a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card.</p>

            <div className='space-y-2'>
                <Button variant='solid' radius='full' size='lg' color='primary' className='font-bold text-sm'>Create New Card</Button>
                <p className='text-primary font-semibold'>Will be available soon</p>
            </div>
        </div>

        <img className='sm:1/2' src="card1.png" alt="" />
    </section>
    </>
  )
}

export default Card1