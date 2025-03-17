import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router';
import Footer from './footer';

function Home() {
  return (
    <div className='flex flex-col items-center px-6 font-bold font-serif mt-5'>
        <h1 className='text-3xl md:text-5xl md:mx-50 col-9 text-center'><span className='text-[#209CEE]'>Discover Your Next Adventure with AI:</span><br/>Personalized Itineraries at Your Fingertips</h1>
        <p className='text-center text-sm md:text-lg text-gray-600 py-6 md:py-10'>Your personal & free trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>

        <div>
            <Link to={'/create-trip'}>
                <Button className={'w-full md:w-auto md:h-12 cursor-pointer font-bold'}>Get Started. It's free👆</Button>
            </Link>
        </div>

        <div className='my-10'>
          <img src='/homeImg.jpeg' alt='Home Image' className='md:w-[600px] md:h-[600px] cursor-pointer hover:scale-110 transition-all'
            onClick={() => {
              window.location.href = '/create-trip';
            }}
          />
        </div>

        <div className=''>
        <Footer />
        </div>
    </div>
    
  )
}

export default Home;