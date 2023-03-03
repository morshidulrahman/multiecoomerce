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
      const newitem = action.payload;
      const exitingItems = state.cartItems.find(
        (item) => item.id === newitem.id
      );
      state.totalQuantity++;

      if (!exitingItems) {
        state.cartItems.push({
          id: newitem.id,
          productName: newitem.productName,
          imgUrl: newitem.imgUrl,
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
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deletItems: (state, action) => {
      const id = action.payload;
      const existingItems = state.cartItems.find((item) => item.id === id);
      if (existingItems) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItems.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deletItems } = cartSlice.actions;
export const Cartitems = (state) => state.cart.cartItems;
export const TotalAmount = (state) => state.cart.totalAmount;
export const TotalQuantity = (state) => state.cart.totalQuantity;

export default cartSlice.reducer;
