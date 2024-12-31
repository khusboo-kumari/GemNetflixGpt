import { useRef } from "react"
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import genAI from "../utils/gemini";
import { addGptSearchedMovieResults } from "../utils/gptSlice";





function useGptMovieSearch() {
    const searchText = useRef(null) ; 
    const dispatch = useDispatch() ; 

    async function searchMovieTMDB(movie) {
        const url =   "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1";  
        const data = await fetch(url, API_OPTIONS) ; 
        const json = await data.json() ; 
        return json.results ; 
    }

    // async function handleGPTSearchClick()
    async function handleGptSearchClick   (){
        console.log(searchText.current.value) ; 
      //    Make an API call to Gemini API and get the movie results .  
      const model =  genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
      const prompt = `Act as a Movie Recommendation System and suggest some movies for the query : ${searchText.current.value}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Don, Sholey, Koi Mil Geya, Chak De Inida`;
    const result = await model.generateContent(prompt) ; 
    const promptMovies = result.response.text();
    const promptMoviesList = promptMovies.split(",");
    const promiseArray = promptMoviesList.map((movie) =>
        searchMovieTMDB(movie)
      );
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addGptSearchedMovieResults({
          gptSearchedMovieNames: promptMoviesList,
          gptSearchedMovieResults: tmdbResults,
        })
      );


  } 
  return   { searchText, handleGptSearchClick  };
}

export default useGptMovieSearch ; 
