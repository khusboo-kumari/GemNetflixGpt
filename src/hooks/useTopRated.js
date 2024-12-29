import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";



const useTopRated = () => {
    const dispatch = useDispatch() ; 
  
    const getTopRated =  async () =>{
        const data = await  fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS) ; 
        const json = await data.json() ; 
        console.log("Top rated movie is here ", json.results) ; 
        dispatch(addTopRated(json.results)) ; 
    }

    useEffect(() =>{
        getTopRated() ; 
    },[]) ; 
 
}

export default useTopRated ; 
