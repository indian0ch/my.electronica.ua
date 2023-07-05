import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalSum: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "CartFunctional",
  initialState: initialState,
  reducers: {
    addNewItem: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalSum += newItem.price;
      state.totalCount++;
    },
    removeItem: (state, action) => {
      const nameItem = action.payload;
      const deleteItem = state.items.find(
        (element) => element.name === nameItem
      );
      state.items = state.items.filter((element) => element.name !== nameItem);
      state.totalCount -= deleteItem.count;
      state.totalSum -= deleteItem.count * deleteItem.price;
    },
    decreaseItem: (state, action) => {
      const nameItem = action.payload;
      const item = state.items.find((item) => item.name === nameItem);
      if (item.count > 1) {
        item.count--;
        state.totalSum -= item.price;
        state.totalCount--;
      } else{
        state.items = state.items.filter((element) => element.name !== nameItem);
        state.totalCount -= item.count;
        state.totalSum -= item.count * item.price;
      }
    },
    increaseItem: (state, action) => {
      const nameItem = action.payload;
      const item = state.items.find((item) => item.name === nameItem);
      item.count++;
      state.totalSum += item.price;
      state.totalCount++;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
