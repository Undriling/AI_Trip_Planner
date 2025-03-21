import { useGoogleLogin } from "@react-oauth/google";
import { useSelector, useDispatch } from "react-redux";
import { addUserInfo } from "../store/userSlice"; 
import { setDialogOpen } from "../store/dialogSlice"; 
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { AI_Search_PROMPT } from "../constants/constant";
import { toast } from "sonner";
import { addItinary } from "../store/itinarySlice";
import { chatSession } from "../service/genAI";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import { useNavigate } from "react-router";


const MyComponent = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const dialogOpen = useSelector((state) => state.dialog.open);
    const tripDetails = useSelector((store) => store.places)
    const user = useSelector((state) => state.user.userInfo);
    // const itinary = useSelector((store) => store.itinaryDetails)
    const navigate = useNavigate();
   
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                });

                setLoading(true, toast("Please wait... Generating your itinerary"))

                dispatch(addUserInfo(userInfo.data));
                dispatch(setDialogOpen(false)); 
            } catch (error) {
                console.error("Google Auth Error:", error);
            }
        },
        onError: (error) => console.error("Login Failed:", error),
    });

   
    const handleClickEffect = async () => {
        if (!user) {
            dispatch(setDialogOpen(true)); 
            return;
        }

        if (tripDetails.placesName === null){
            toast("Please enter your travel destination !")
            return;
        } 

        setLoading(true, toast("Please wait... Generating your itinerary"))

        if (tripDetails.tripDetails?.travelDays > 10 || tripDetails.tripDetails?.travelDays < 2) {
            toast("Please enter days between 3 to 10");
            return;
        }
        if (tripDetails.tripDetails?.budget === null) {
            toast("Please select your budget !")
            return;
        }

        setLoading(true, toast("Please wait... Generating your itinerary"))

        if (tripDetails.tripDetails?.travelerList === null) {
            toast("Please select who do you plan on traveling !")
            return;
        }

        const Final_Prompt = AI_Search_PROMPT
        .replace("{ location }", tripDetails.placesName?.label)
        .replace("{ travelDays }", tripDetails.tripDetails?.travelDays)
        .replace("{ budget }", tripDetails.tripDetails?.budget)
        .replace("{ travelerList }", tripDetails.tripDetails?.travelerList)
        .replace("{ travelDays }", tripDetails.tripDetails?.travelDays)


        setLoading(true, toast("Please wait... Generating your itinerary"))

        const result = await chatSession.sendMessage(Final_Prompt);


        dispatch(addItinary(result.response.text()))

        SaveAITripData(result.response.text());
        
    }


    const SaveAITripData = async (TripData) => {
        const docId = Date.now().toString()
        const userInfo =JSON.parse(localStorage.getItem("userInfo"));

        await setDoc(doc(db, "AITripData", docId), {
            tripDetails: tripDetails,
            userInfo: userInfo,
            tripdata: JSON.parse(TripData),
            userEmail: userInfo.email,
            id: docId
          });

        navigate("/view-itinerary/"+ docId)

    }


    return (
        <>
            <Dialog open={dialogOpen} onOpenChange={(isOpen) => dispatch(setDialogOpen(isOpen))}>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>.</DialogTitle> 
                        <DialogDescription>
                            <img src="./logo.svg" alt="logo"/>
                            <h2 className="text-2xl font-serif font-bold mt-5">Sign in to continue</h2>
                            <p>Please sign in with Google authentication securely</p>
                        </DialogDescription>
                    </DialogHeader>
                    <Button onClick={() => login()} className={"text-md mt-5 flex gap-4 items-center w-full"}> <FcGoogle className='h-6 w-6'/> Sign in with Google </Button>
                </DialogContent>
            </Dialog>

            <Button disabled={loading} className={"md:h-12 cursor-pointer font-bold text-[10px] md:text-[15px]"} onClick={ handleClickEffect }>
                {loading ? (<AiOutlineLoading3Quarters className="h-7 w-7 animate-spin"/>) : "Get your itinerary 🚀"}
            </Button>
        </>
    );
};

export default MyComponent;
