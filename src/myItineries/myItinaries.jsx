import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { db } from '../service/firebaseConfig';
import ItineraryCard from './components/itineraryCard';
import Footer from '../components/custom/footer';

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
    <>
    <div className='sm:px-20 md:px-32 mt-4 md:mt-8 font-serif px-4 min-w-screen min-h-screen'>
        <h1 className='md:text-3xl text-xl'>My Itineraries</h1>

        <div className='grid grid-cols-1 px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-7 justify-center w-full'>
            {user && myItineries.length > 0 ? myItineries.map((trip, index) => (
                <ItineraryCard trip={trip} index={index}/>  ))
                :
                [1,2,3,4,5,6].map((item, index) => (
                    <div key={index} className='xs:[200px] sm:w-[300px] lg:w-[310px] h-[200px] md:w-[235px] grid grid-cols-1 px-5 mx-5 sm:grid-cols-2 md:grid-cols-4 my-4 bg-gray-200 animate-pulse rounded-2xl py-2 duration-700'>
                    </div>
                )) 
            }
        </div>

    </div>

    <div className='w-screen bottom-0 left-0'>
        <Footer />
    </div>

    </>
  )
}

export default MyItinaries;