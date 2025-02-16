import React from 'react'

function FeedBack() {

    const CardData = [
        {
            img: 'img1.png',
            nam: 'Hadid Khan',
            review: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
            status: 'UIUX Designer'
        },
        {
            img: 'img1.png',
            nam: 'Wade Warren',
            review: "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
            status: 'Web Designer'
        },
        {
            img: 'img1.png',
            nam: 'Jenny Wilson',
            review: "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
            status: 'Trust Administrator'
        }
    ]

  return (
    <>
    <section className='gap-8 grid grid-cols-1 md:grid-cols-3'>
    {
        CardData.map((item,i)=>(
            <div className='bg-[#27232f]/25 px-6 py-14 rounded-2xl space-y-8' key={i}>

                <div className='bg-[#3d3f54] flex h-14 items-center justify-center p-2 rounded-full w-14'>
                    <img className='w-1/2' src="icon.png" alt="" />
                </div>

                <p>&quot; {item.review}</p>

                <div className='flex gap-2 items-center'>
                    <img className='h-12 w-12 rounded-full' src={item.img} alt="" />

                    <div>
                        <h5 className='font-bold'>{item.nam}</h5>
                        <p className='text-secondary text-sm'>{item.status}</p>
                    </div>
                </div>
            </div>
        ))
    }
    </section>
    </>
  )
}

export default FeedBack