import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";

import { addTrailerVideo } from "../utils/movieSlice";


const useMovieTrailer = (movie_id) =>{
    const dispatch = useDispatch() ; 

    // Fetching the trailer video and updating the store with trailer video data 
 const getMovieVideos = async () => {
     try {
         const response = await fetch(
             `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
             API_OPTIONS
         );

         // Check for HTTP errors
         if (!response.ok) {
             console.error(`HTTP error! status: ${response.status}`);
             return;
         }

         const json = await response.json();
        //  console.log("Getting Movie Videos:", json);

         // Check if `results` exists and is an array
         if (!json.results || !Array.isArray(json.results)) {
            //  console.error("Invalid API response:", json);
             return;
         }

         // Filter for trailers
         const filterData = json.results.filter((video) => video.type === "Trailer");
         const trailer = filterData.length ? filterData[0] : json.results[0];
        //  console.log("Trailer:", trailer);
         dispatch(addTrailerVideo(trailer)) ; 
         // setTrailerId(trailer.key) ; 
     } catch (error) {
         console.error("Error fetching movie videos:", error);
     }
 };

 useEffect(() => {
     getMovieVideos();
 }, []);
}

export default useMovieTrailer ; 