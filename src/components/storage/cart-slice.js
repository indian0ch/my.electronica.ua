import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      name: "Smart Watch 8",
      price: 348,
      count: 2,
      color: "Black",
      imageSrc: "6s-main.jpeg",
    },
  ],
  totalSum: 696,
  totalCount: 1,
};

const cartSlice = createSlice({
  name: "CartFunctional",
  initialState: initialState,
  reducers: {
    addNewItem: (state, action) => {
      const newItem = action.payload;
      //   state.isColorActive = id;
      state.items.push(newItem);
      state.totalSum += newItem.price;
      state.totalCount++;
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter((element) => element.name !== item.name);
      state.totalCount -= item.count;
      state.totalSum -= item.count * item.price;
    },
    decreaseItem: (state, action) => {
      const nameItem = action.payload;
      console.log(nameItem);
      const item = state.items.find((item) => item.name === nameItem);
      console.log(item.name);
      item.count--;
      state.totalSum -= item.price;
      state.totalCount--;
      state.items=[...state.items, item];
    },
    increaseItem: (state, action) => {
      const nameItem = action.payload;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
