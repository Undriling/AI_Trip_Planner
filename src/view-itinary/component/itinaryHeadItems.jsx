import React from 'react'
import ShareBtn from './ShareBtn';
function ItinaryHeadItems({ trip }) {

  return (
    <div className='flex justify-between items-center'>
        <div className='my-7 flex flex-col gap-3'>
            <h1 className='py-2 font-bold text-xl md:text-3xl'>{trip?.tripDetails?.placesName?.label}</h1>
            <div className='flex gap-3 md:gap-10 text-[8px] text-center text-xs md:text-lg lg:text-lg xl:text-lg'>
                <h2 className='bg-cyan-300 rounded-lg p-2'>{trip?.tripDetails?.tripDetails?.travelDays} Days</h2>
                <h2 className='bg-cyan-300 rounded-lg p-2'>{trip?.tripDetails?.tripDetails?.budget} Budget</h2>
                <h2 className='bg-cyan-300 rounded-lg p-2'>Best Itinerary For {trip?.tripDetails?.tripDetails?.travelerList}</h2>
            </div>
        </div>
        <ShareBtn/>
    </div>
  )
}

export default ItinaryHeadItems;