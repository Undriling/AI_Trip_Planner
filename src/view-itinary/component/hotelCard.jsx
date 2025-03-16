import React, { useEffect, useState } from 'react'
import { GetPlaceDetails } from '../../service/MapBaseApi';
import { Google_Map_Photo_URL, Google_Map_Place_Location } from '../../constants/constant';
import { Link } from 'lucide-react';

function HotelCard({hotels, index}) {
    const [hotelPhotoUrl, setHotelPhotoUrl] = useState('/containerImg.jpeg');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        hotels && GetPhotoURL()
    },[hotels])


    const GetPhotoURL = async () => {
        const data = {
            textQuery: hotels?.hotelName
        }

        try {
            const result = await GetPlaceDetails(data)
            const photoRef = result.data?.places[0]?.photos[0]?.name;
            
            if (photoRef) {
                const Hotel_Photo_URL = Google_Map_Photo_URL.replace('{NAME}', result.data?.places[0]?.photos[0]?.name)
                setHotelPhotoUrl(Hotel_Photo_URL)
            }
        } catch (error) {
            console.error("Error fetching image:", error)
        }
    }
    

  return (
        <div className='md:w-[350px] md:mx-3 shadow-2xl rounded-2xl p-2 hover:scale-110 transition-all cursor-pointer' key={index}>
            <a href={Google_Map_Place_Location + hotels?.hotelName + hotels?.hotelAddress} target='_blank'>
                {hotelPhotoUrl && 
                    <img src={hotelPhotoUrl ? hotelPhotoUrl : '/hotelImg.jpeg'} alt='Hotel Image' className='h-[160px] w-full md:h-[200px] object-cover rounded-2xl py-2'
                        loading='lazy'
                        onLoad={() => setIsLoaded(true)}
                        onError={(e) => { e.target.src = '/hotelImg.jpeg' }}
                    />
                }
            </a>
            <p className='text-xs md:text-sm text-gray-600'>📍 {hotels?.hotelAddress}</p>
            <h2 className='text-sm font-bold py-2'>{hotels?.hotelName}</h2>
            <h2 className='text-xs md:text-sm font-semibold py-2'>💰 {hotels?.pricePerNight} per night</h2>
            <h2 className='text-xs md:text-sm font-bold pb-2'>⭐ {hotels?.rating}</h2>
        </div>
  )
}

export default HotelCard;