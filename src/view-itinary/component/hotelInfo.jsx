import React from 'react'
import HotelCard from './hotelCard';
import { Google_Map_Place_Location } from '../../constants/constant';

const HotelRecomendation = ({trip}) => {
    

  return (
        <div className='md:my-4'>
            <h1 className='md:text-xl font-semibold'>Hotel Recommendations</h1>

            <div className='my-2 md:flex gap-5 md:grid-cols-3 xl:grid-cols-4'>
                {trip?.tripdata?.hotelOptions?.map((hotels, index) => (
                    <HotelCard hotels={hotels} index={index}/>
                ))}
            </div>
        </div>
  )
}

export default HotelRecomendation;