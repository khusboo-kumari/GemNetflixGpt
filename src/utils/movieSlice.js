import { createSlice } from "@reduxjs/toolkit" ; 
// import { react } from "react";

const movieSlice = createSlice({
    name : "movies" , 
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        topRated : null, 
        upComing : null, 
        trailerVideo : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload ; 
        },
        addPopularMovies : (state, action) =>{
            state.popularMovies = action.payload ; 
        },
        addTopRated:(state,action) =>{
            state.topRated  = action.payload ; 
        },
        addUpComing: (state, action) =>{
            state.upComing = action.payload ; 
        },
        addTrailerVideo : (state, action ) =>{
            state.trailerVideo = action.payload ; 
        } 
    }
})  ; 

export const {addNowPlayingMovies, addPopularMovies, addTopRated, addUpComing, addTrailerVideo} = movieSlice.actions ; 
export default movieSlice.reducer ;   