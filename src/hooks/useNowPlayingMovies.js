import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMovies = () =>{
    
const dispatch = useDispatch();
const getNowPlayingMovies = async () => {

  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
  const json = await data.json();
  console.log('Fetching movies...');
  // console.log(json.results);
  dispatch(addNowPlayingMovies(json.results)) ; 

}
//  I'll make the API call  inside useEffect hook so that it is called only once . i put [] , so that i dont make the infinite API calls . 
useEffect(() => {
  getNowPlayingMovies();
},[]);
}

export default useNowPlayingMovies ; 