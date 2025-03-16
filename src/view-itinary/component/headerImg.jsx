import React, { useEffect, useState } from 'react'
import { GetPlaceDetails } from '../../service/MapBaseApi'
import { Google_Map_Photo_URL } from '../../constants/constant'

function HeaderImg({ trip }) {
    const [photoUrl, setPhotoUrl] = useState();
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
            const photoRef = result.data.places[0]?.photos[2]?.name;

            if (photoRef) {
                const Photo_URL = Google_Map_Photo_URL.replace('{NAME}', result.data.places[0]?.photos[2]?.name)
                setPhotoUrl(Photo_URL)
            }
        } catch (error) {
            console.error("Error fetching image:", error)
        }
    }


    return (
        <div>
            {photoUrl &&
                (<img src={photoUrl} alt='Itinary photo' className={`md:h-[350px] w-full object-cover rounded-3xl duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)} 
                    onError={(e) => {e.target.src = '/headerImg.jpeg'}}
                />)       
            }
        </div>
    )
}

export default HeaderImg;