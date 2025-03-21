import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router';
import Footer from './footer';

function Home() {
  return (
    <>
    <div className='flex flex-col items-center px-6 font-bold font-serif mt-5 min-w-screen'>
        <h1 className='text-xl md:text-4xl md:mx-50 col-9 text-center'><span className='text-[#209CEE]'>Revolutionize Your Travel Experience with AI:</span><br/>Smart, Personalized Itineraries with the Best Travel Support</h1>
        <p className='text-center text-xs md:text-lg text-gray-600 py-6 md:py-10'>Your intelligent and hassle-free travel companion, crafting personalized itineraries tailored to your preferences, budget, and schedule all with seamless support for a stress-free journey.</p>

        <div>
            <Link to={'/create-trip'}>
                <Button className={'w-full md:w-auto md:h-12 text-[10px] md:text-sm cursor-pointer font-bold'}>Get Started. It's free👆</Button>
            </Link>
        </div>

        <div className='my-10'>
          <img src='/homeImg.jpeg' alt='Home Image' className='md:w-[500px] md:h-[600px] cursor-pointer hover:scale-110 transition-all'
            onClick={() => {
              window.location.href = '/create-trip';
            }}
          />
        </div>

    </div>

    <div className='w-screen bottom-0 left-0'>
      <Footer />
    </div>

    </>
    
  )
}

export default Home;