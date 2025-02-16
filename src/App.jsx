import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Faq from './components/Faq'
import FeedBack from './components/FeedBack'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavbarArea from './components/Navbar'
import Offer from './components/Offer'
import Vissoin from './components/Vissoin'



function App() {

  return (
    <>
      <main className='overflow-x-hidden'>
      <NavbarArea/>
      <div className='w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto py-5'>
        <div className="space-y-[45px]">
        <Hero/>
        <Vissoin/>
        <Offer/>
        <Card1/>
        <Card2/>
        <FeedBack/>
        <Faq/>
        </div>
      </div>
      <Footer/>
      </main>
    </>
  )
}

export default App
