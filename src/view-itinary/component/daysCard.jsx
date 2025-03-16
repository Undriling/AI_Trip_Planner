import React, { useEffect, useState } from 'react'
import { GetPlaceDetails } from '../../service/MapBaseApi';
import { Google_Map_Photo_URL, Google_Map_Place_Location } from '../../constants/constant';
import { Link } from 'react-router';

function DaysCard({places, index}) {
    const [placePhotoUrl, setPlacePhotoUrl] = useState();
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        places && GetPhotoURL()
    },[places])


    const GetPhotoURL = async () => {
        const data = {
            textQuery: places?.placeName
        }

         
        try {
            const result = await GetPlaceDetails(data);
            const phototRef = result.data?.places[0]?.photos[0]?.name;

            if (phototRef) {
                const Place_Photo_URL = Google_Map_Photo_URL.replace('{NAME}', result.data?.places[0]?.photos[0]?.name)
                setPlacePhotoUrl(Place_Photo_URL)
            }
        } catch (error) {
            console.error("Error fetching image:", error)
        }
        
    }
    

  return (
    <div className='w-full md:max-w-[400px] md:flex md:mx-7 shadow-2xl rounded-2xl p-2 hover:scale-110 transition-all' key={index}>
        <h1>{places?.bestTimeToVisit}</h1>

        <Link to={Google_Map_Place_Location+places?.placeName} target='_blank'>
            <div className='lg:flex cursor-pointer'>
                {placePhotoUrl && (
                    <img src={ placePhotoUrl ? placePhotoUrl : '/touristImg.jpeg' } alt='Profile Img' className={`w-[220px] h-[150px] md:h-[300px] object-cover rounded-2xl py-2 duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        loading='lazy'
                        onLoad={() => setIsLoaded(true)}
                        onError={(e) => {e.target.src = '/touristImg.jpeg'}}
                    />
                )}

                <div className='px-4'>
                    <h2 className='text-sm font-bold py-2'>{places?.placeName}</h2>
                    <p className='text-xs md:text-sm text-gray-600'>About :- {places?.placeDetails}</p>
                    <h2 className='text-xs md:text-sm font-semibold py-1'>💰 {places?.ticketPricing}</h2>
                    <h2 className='text-xs md:text-sm font-bold'>⭐ {places?.rating}</h2>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default DaysCard;