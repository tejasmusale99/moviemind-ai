import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {},
    reducers: {
        addMovies: (state, action)=>{
            return action.payload;
        }
    }
})

export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;