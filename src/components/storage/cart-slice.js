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
      const isItemAlreadyExist = state.items.some(
        (element) =>
          element.name === newItem.name && element.color === newItem.color
      );
      console.log(isItemAlreadyExist);
      if (isItemAlreadyExist) {
        const item = state.items.find(
          (item) => item.name === newItem.name && item.color === newItem.color
        );
        item.count++;
      } else {
        state.items.push(newItem);
      }
      state.totalSum += newItem.price;
      state.totalCount++;
    },
    removeItem: (state, action) => {
      const itemProperty = action.payload;
      const deleteItem = state.items.find(
        (element) =>
          element.name === itemProperty.name &&
          element.color === itemProperty.color
      );
      state.items = state.items.filter((element) => element !== deleteItem);
      state.totalCount -= deleteItem.count;
      state.totalSum -= deleteItem.count * deleteItem.price;
    },
    decreaseItem: (state, action) => {
      const itemProperty = action.payload;
      const item = state.items.find(
        (item) =>
          item.name === itemProperty.name && item.color === itemProperty.color
      );
      if (item.count > 1) {
        item.count--;
        state.totalSum -= item.price;
        state.totalCount--;
      } else {
        const itemIndex = state.items.indexOf(item);
        state.items.splice(itemIndex, 1);
        state.totalCount -= item.count;
        state.totalSum -= item.count * item.price;
      }
    },
    increaseItem: (state, action) => {
      const itemProperty = action.payload;
      const item = state.items.find(
        (item) =>
          item.name === itemProperty.name && item.color === itemProperty.color
      );
      item.count++;
      state.totalSum += item.price;
      state.totalCount++;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
