// import { Button } from "@/components/ui/button"
// import { Img1 } from "../../constants/constants";
import { Button } from "../ui/button";
import Footer from "./footer";


export default function About() {
    return (
      <div className="bg-gray-50 min-h-screen ">
        <div className="max-w-6xl mx-auto px-6 py-12 font-serif">
          
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
            About <span className="text-blue-500">Tripo File</span>
          </h2>
          <p className="mt-4 text-gray-600 text-center text-lg max-w-3xl mx-auto">
            Your ultimate AI-powered travel planner, designed to simplify trip planning, itinerary creation, 
            and seamless travel experiences. Effortlessly discover destinations, optimize your schedule, and make bookings—all in one place.
          </p>
  
          <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
            
            <div className="md:w-1/2">
              <img 
                src="/homeImg.jpeg" 
                alt="Event Planning"
                className="rounded-xl shadow-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>
  
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Simplify Event Planning & Maximize Engagement
              </h3>
              <p className="mt-4 text-gray-600 text-lg">
                Tripo File is your AI-powered travel companion, making itinerary planning effortless. 
                Whether you're dreaming of a solo adventure, a family getaway, or a business trip, we provide smart, 
                personalized recommendations tailored to your interests and budget.
              </p>
  
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">✔</span>
                  <p className="text-gray-700 text-lg">AI-driven itinerary planning for a seamless experience</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">✔</span>
                  <p className="text-gray-700 text-lg">Personalized trip suggestions based on your preferences</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">✔</span>
                  <p className="text-gray-700 text-lg">Real-time travel updates for stress-free navigation</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">✔</span>
                  <p className="text-gray-700 text-lg">Hassle-free bookings for flights, hotels, and activities</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Ready to explore the world with ease? 🚀
            </h3>
            <a href="/" >
                <Button className={'w-full my-16 md:w-auto md:h-12 cursor-pointer bg-black hover:bg-gray-700 text-white font-bold transition'}>Get Started. It's free👆</Button>
            </a>
          </div>
  
        </div>

        <div>
            <Footer/>
        </div>

      </div>
    );
  }
  