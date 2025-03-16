import React, { useEffect, useState } from 'react'
import { GetPlaceDetails } from '../../service/MapBaseApi';
import { Google_Map_Photo_URL } from '../../constants/constant';
import { Link } from 'react-router';

function ItineraryCard({trip, index}) {
    const [placePhotoUrl, setPlacePhotoUrl] = useState();
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        trip && GetPhotoURL()
    },[trip])


    const GetPhotoURL = async () => {
        const data = {
            textQuery: trip?.tripDetails?.placesName?.label
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
    <Link href={`/view-itinerary/`+ trip?.id}>
        <div key={index} >
            {placePhotoUrl && 
                <img src={placePhotoUrl ? placePhotoUrl : '/containerImg.jpeg'} className='w-[230px] h-[200px] object-cover rounded-2xl py-2 duration-700'
                    loading='lazy'
                    onLoad={() => setIsLoaded(true)}
                    onError={(e) => {e.target.src = '/touristImg.jpeg'}}
                />
            }

            <div className='w-[230px]'>
                <h2 className='text-sm font-bold'>{trip?.tripDetails?.placesName?.label}</h2>
                <h2 className='text-xs'>For {trip?.tripDetails?.tripDetails?.travelDays} days and {trip?.tripDetails?.tripDetails?.budget} budget</h2>
            </div>
        </div>
    </Link>
  )
}

export default ItineraryCard;