import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newitem = [action.payload, ...state.cartItems];
      const exitingItems = state.cartItems.find(
        (item) => item.id === newitem.id
      );
      state.totalQuantity++;

      if (!exitingItems) {
        state.cartItems.push({
          id: newitem.id,
          productName: newitem.productName,
          image: newitem.imgUrl,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
        });
      } else {
        exitingItems.quantity++;
        exitingItems.totalPrice =
          Number(exitingItems.totalPrice) + Number(newitem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
      console.log(newitem);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
