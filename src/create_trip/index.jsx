import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { addPlacesName, addTripDetails } from '../store/placeSlice';
import { Input } from '../components/ui/input';
import { SelectBudgetList, SelectTravelerList } from '../constants/options';
import MyComponent from '../hooks/getItinaryBtn';
import Footer from '../components/custom/footer';


function CreateTrip() {
    const dispatch = useDispatch();
    const [selectedI, setSelectedI] = useState(null);
    const [selectedII, setSelectedII] = useState(null);

    
    
    return (
        <>
        <div className='sm:px-20 md:px-32 mt-10 font-serif px-6 flex flex-col min-w-screen min-h-screen' onClick={(e) => e.preventDefault()}>
            <h2 className='md:text-3xl text-xl '>Tell us your travel preferences 🏕️🌴</h2>
            <p className='text-bold text-gray-600 md:text-xl py-5'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>

            <div className='gap-10 mt-15'>
                <div className=''>
                    <h2 className='text-bold md:text-3xl text-xl py-4 my-4'>What is destination of choice?</h2>
                    <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
                        selectProps={{onChange: (a) => {dispatch(addPlacesName(a))}}}
                    />
                </div>

                <div className='my-10'>
                    <h2 className='text-bold text-xl md:text-3xl py-4'>How many days are you planning your trip?</h2>
                    <Input type={'number'} onChange={(b) => {dispatch(addTripDetails({key:"travelDays", value: b.target.value}))}} placeholder={'2-10 days'} className={'rounded-md px-3 my-3 text-xs md:text-lg bg-[#f0f0f0] font-bold'}></Input>
                </div>

                <div className='my-10 items-center justify-center'>
                    <h2 className='text-bold text-xl md:text-3xl py-4'>What is Your Budget?</h2>
                    <div className='md:flex grid-cols-3 md:p-10 justify-between'>
                        {
                            SelectBudgetList.map((item,index) => {
                                return (<div key={index} onClick={() => {setSelectedI(index); dispatch(addTripDetails({key: "budget", value: item.title}))}} 
                                    className={`md:p-5 p-3 my-5 md:my-0 md:w-1/2 mx-7 text-center flex-row shadow-sm border-2 rounded-lg bg-[#f0f0f0f0] cursor-pointer hover:shadow-2xl ${selectedI == index ? "border-[#8046FD]" : "border-transparent"}`}>
                                    <h2 className='text-2xl md:text-3xl'>{item.icon}</h2>
                                    <h2 className='p-2 md:text-xl'>{item.title}</h2>
                                    <h3 className='text-sm'>{item.description}</h3>
                                </div>)})
                        }
                    </div>
                </div>

                <div className='my-10 items-center justify-center'>
                    <h2 className='text-bold text-xl md:text-3xl py-4'>Who do you plan on traveling with on your next adventure?</h2>
                    <div className='md:flex grid-cols-4 md:py-10 justify-between'>
                        {
                            SelectTravelerList.map((item,index) => {
                                return (<div key={index} onClick={() => {setSelectedII(index); dispatch(addTripDetails({key: "travelerList", value: item.title}))}}
                                  className={`md:p-5 my-5 md:my-0 md:w-1/2 mx-4 p-3 text-center border-2 shadow-sm  rounded-lg bg-[#f0f0f0f0] cursor-pointer hover:shadow-2xl ${selectedII == index ? "border-[#8046FD]" : "border-transparent"}`}>
                                    <h2 className='text-2xl md:text-3xl'>{item.icon}</h2>
                                    <h2 className='p-2 md:text-xl'>{item.title}</h2>
                                    <h3 className='text-sm'>{item.description}</h3>
                                </div>)})
                        }
                    </div>
                </div>


                <div className='flex justify-end my-10'>
                    <MyComponent/>
                </div>

            </div>
        </div>

        <div className='w-screen bottom-0 left-0'>
            <Footer />
        </div>

        </>
    )
}

export default CreateTrip;