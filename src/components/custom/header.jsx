import React from 'react'
import { Button } from '../ui/button';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { addUserInfo, removeUserInfo } from '../../store/userSlice';
import { setDialogOpen } from '../../store/dialogSlice';
import axios from 'axios';
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


function Header() {
  const dispatch = useDispatch();
  const dialogOpen = useSelector((state) => state.dialog.open);
  const user = useSelector((state) => state.user.userInfo);


  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
        try {
            const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            });

            // Store user data in Redux
            dispatch(addUserInfo(userInfo.data));
            dispatch(setDialogOpen(false)); 
        } catch (error) {
            console.error("Google Auth Error:", error);
        }
    },
    onError: (error) => console.error("Login Failed:", error),

});

const handleSignIn = () => {
  if (!user) {
    dispatch(setDialogOpen(true));
    return;
}
}

const handleLogout = () => {
    googleLogout(); // Logs the user out of Google
    dispatch(removeUserInfo()); // Removes user from Redux state
    window.location.href = "/"; // Redirect to home page
  };


  return (
    <>
    <div className='flex justify-between items-center px-4 shadow-sm bg-fixed'>
        <img src="/logo.svg" alt="logo" className='w-30 h-20' />

        <div>
          
          <Dialog open={dialogOpen} onOpenChange={(isOpen) => dispatch(setDialogOpen(isOpen))}>
                <DialogContent >
                    <DialogHeader>
                    <DialogTitle>-</DialogTitle>
                        <DialogDescription>
                            <img src="./logo.svg" alt="logo" />
                            <h2 className="text-2xl font-serif font-bold mt-5">Sign in to continue</h2>
                            <p>Please sign in with Google authentication securely</p>
                        </DialogDescription>
                    </DialogHeader>
                    <Button onClick={() => login()} className={"text-md mt-5 flex gap-4 items-center w-full cursor-pointer"}> <FcGoogle className='h-6 w-6'/> Sign in with Google </Button>
                </DialogContent>
            </Dialog>

            <div className='flex items-center gap-2'>
                {user ? 
                    <div className='flex items-center gap-5'>
                        <a href='/my-itineraries'>
                            <Button>My Itineries</Button>
                        </a>
                        <Popover>
                            <PopoverTrigger>
                                <img src={user.picture} alt="user" className='w-11 h-11 rounded-full shadow-xl border-2 border-gray-300 object-cover cursor-pointer' /> 
                            </PopoverTrigger>

                            <PopoverContent className='w-57'>
                                <h1 className='text-sm font-bold font-serif'>{user?.name}</h1>
                                <p className='text-xs text-gray-500 font-serif py-2'>📧 {user?.email}</p>
                                <a href='/'>
                                    <Button onClick={handleLogout} className={"cursor-pointer"}>
                                        Logout
                                    </Button>
                                </a>
                            </PopoverContent>
                        </Popover>
                    </div>
                        : 
                    <Button onClick={handleSignIn} className={"cursor-pointer"}>Sign In</Button>
                }
            </div>

        </div>
    </div>
    </>
  )
}

export default Header;