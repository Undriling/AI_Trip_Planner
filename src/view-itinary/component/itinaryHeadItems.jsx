import React from 'react'
import { Button } from "@/components/ui/button";
import { GrSend } from "react-icons/gr";
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
        <Button className={"size-7 sm:size-12 md:size-12 lg:size-12 xl:size-12 cursor-pointer"}><GrSend className=''/></Button>
    </div>
  )
}

export default ItinaryHeadItems;