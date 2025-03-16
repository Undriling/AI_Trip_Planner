import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { db } from '../service/firebaseConfig';
import ItineraryCard from './components/itineraryCard';

function MyItinaries() {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const navigate = useNavigate();
    const [myItineries, setMyItineries] = useState([]);

    useEffect (() => {
        user && GetItineries();
    }, [user])
    const GetItineries = async () => {
        if (!user) {
            navigate('/');
            return;
        }

        const q = query(collection(db, "AITripData"), where("userEmail", "==", user.email));
        const querySnapshot = await getDocs(q);
        setMyItineries([])
        querySnapshot.forEach((doc) => {
            setMyItineries(previousValue => [...previousValue, doc.data()])
        });
    }
    
  return (
    <div className='sm:px-20 md:px-32 mt-8 font-serif px-6'>
        <h1 className='md:text-3xl text-2xl'>My Itinaries</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 mt-7'>
            {user && myItineries.length > 0 ? myItineries.map((trip, index) => (
                <ItineraryCard trip={trip} index={index}/>  ))
                :
                [1,2,3,4].map((item, index) => (
                    <div key={index} className='w-[230px] h-[200px] bg-gray-200 animate-pulse rounded-2xl py-2 duration-700'>
                    </div>
               
            )) 
            
            }
        </div>

    </div>
  )
}

export default MyItinaries;