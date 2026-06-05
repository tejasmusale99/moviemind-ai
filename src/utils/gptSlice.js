import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
        isGptSearchVisible: false,
  },
  reducers: {
    // Define reducers for GPT-related actions here
    toggleGptSearchView: (state) => {
      // Logic to toggle GPT search visibility
      state.isGptSearchVisible = !state.isGptSearchVisible;
    }
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;