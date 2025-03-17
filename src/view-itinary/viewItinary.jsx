import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../service/firebaseConfig';
import { useParams } from 'react-router';
import HotelRecomendation from './component/hotelInfo';
import PerDaysItinary from './component/daysItinary';
import { GetPlaceDetails } from '../service/MapBaseApi';
import ItinaryHeadItems from './component/itinaryHeadItems';
import HeaderImg from './component/headerImg';
import Footer from '../components/custom/footer';

const ViewItinary = () => {
    const {tripId} = useParams()
    const [trip, setTrip] = useState();

    
    useEffect(() => {
        tripId && GetData()
    },[tripId])
    
    const GetData = async () => {
        const docRef = doc(db, "AITripData", tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setTrip(docSnap.data())
        }
    }



  return (
        <div >
            <div className='px-10 sm:px-10 md:px-20 lg:px-40 xl:px-55 mt-10 font-serif'>
                {/* Header Image */}
                <HeaderImg trip={trip}/>

                {/* Header items box */}
                <ItinaryHeadItems trip={trip}/>

                {/* Hotel Recommendation Container*/}
                <HotelRecomendation trip={trip}/>

                {/* Places to Visit Container - Day-1 , Day-2 ... */}
                <PerDaysItinary trip={trip}/>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
  )
}

export default ViewItinary;