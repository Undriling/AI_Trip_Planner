export const AI_Search_PROMPT = "Generate travel plan for Location: { location }, for { travelDays } for { travelerList } with a { budget } budget. Give me a Hotels options List with Hotel Name, Hotel Address, Prices, Hotel Image url, geo coordinates, ratings , descriptions and suggest itinary with Place Name  , place details, place image url , geo coordinates , ticket pricing , rating , Time to travel each of the location for { travelDays } with each day plan with best time to visit in JSON format ."

export const Google_Map_Text_Search = "https://maps.googleapis.com/maps/api/place/textsearch/json?query={Text_Query}&key=YOUR_API_KEY";

export const Google_Map_Photo_URL = "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=500&maxWidthPx=500&key=" + import.meta.env.VITE_GOOGLE_MAP_API_KEY;

export const Google_Map_Place_Location = "https://www.google.com/maps/search/?api=1&query=";

export const UserInfo_Axios = "https://www.googleapis.com/oauth2/v3/userinfo";

export const My_Linkedin_Link = "https://www.linkedin.com/in/manash-baruah-mb/";

export const My_Resume_Link = "https://drive.google.com/file/d/1nu4Lle0d3nUP_2d9vRJjPmfdqzKEh_qU/view?usp=drivesdk";

export const TripoFile_GITHUB_Link = "https://github.com/Undriling/AI_Trip_Planner";

export const Evento_GITHUB_Link = "https://github.com/Undriling/Event-App";

export const MovieAI_GITHUB_Link = "https://github.com/Undriling/NetflixAI";

export const IbcNews_GITHUB_Link = "https://github.com/Undriling/IBC-Latest-News-Updates-Website";