import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:null,
        trailer:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addTrailer : (state, action)=> {
            state.trailer = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTrailer, addTopRatedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;