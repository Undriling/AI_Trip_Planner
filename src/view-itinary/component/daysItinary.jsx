import React from 'react'
import DaysCard from './daysCard';

const PerDaysItinary = ({trip}) => {
  return (
    <div className='my-10'>
            <h1 className='md:text-xl font-semibold'>Places to visit</h1>

            <div className='md:gap-6 sm:-ml-5'>
                {trip?.tripdata?.itinerary && Object.entries(trip?.tripdata?.itinerary)?.sort(([a], [b]) => Number(a.replace("day", "")) - Number(b.replace("day", "")))?.map(([dayKey, dayData], index) => (
                    <div className='my-5 md:my-10' key={index}>
                        <h1 key={index} className='text-sm font-bold md:ml-4 font-sans'>{dayKey.toUpperCase()} - {dayData?.theme}</h1>
                        <div className='grid md:grid-cols-2 md:gap-6 gap-8  md:mt-4'>
                            {dayData?.plan?.map((places, index) => (
                                <DaysCard places={places} index={index}/>
                            ))}
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
  )
}

export default PerDaysItinary;