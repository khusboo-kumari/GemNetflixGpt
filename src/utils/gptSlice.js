import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false ,
        gptSearchedMovieNames: null,
        gptSearchedMovieResults: null,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptSearchedMovieResults: (state, action) => {
            const { gptSearchedMovieNames, gptSearchedMovieResults } = action.payload;
            state.gptSearchedMovieNames = gptSearchedMovieNames;
            state.gptSearchedMovieResults = gptSearchedMovieResults;
        },
    },
})

export const { toggleGPTSearchView,  addGptSearchedMovieResults  } = gptSlice.actions;
export default gptSlice.reducer; 