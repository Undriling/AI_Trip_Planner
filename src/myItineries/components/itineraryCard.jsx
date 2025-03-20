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
    <Link to={`/view-itinerary/`+ trip?.id}>
        <div key={index} className='px-10 md:px-2 text-center md:text-start py-2'>
            {placePhotoUrl && 
                <img src={placePhotoUrl ? placePhotoUrl : '/containerImg.jpeg'} className='w-full md:w-[300px] h-[200px] object-cover rounded-2xl py-2 duration-700'
                    loading='lazy'
                    onLoad={() => setIsLoaded(true)}
                    onError={(e) => {e.target.src = '/touristImg.jpeg'}}
                />
            }

            <div className='md:w-[300px] sm:w-[250px]'>
                <h2 className='md:text-sm font-bold'>{trip?.tripDetails?.placesName?.label}</h2>
                <h2 className='text-xs'>For {trip?.tripDetails?.tripDetails?.travelDays} days with {trip?.tripDetails?.tripDetails?.budget} budget</h2>
            </div>
        </div>
    </Link>
  )
}

export default ItineraryCard;