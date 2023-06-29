import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isColorActive: 0,
};

const colorChoosenSlice = createSlice({
  name: "colorChoose",
  initialState: initialState,
  reducers: {
    changeButtonId: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.isColorActive = id;
      console.log(state.isColorActive);
    },
  },
});
export const colorChoosenActions = colorChoosenSlice.actions;

export default colorChoosenSlice.reducer;
