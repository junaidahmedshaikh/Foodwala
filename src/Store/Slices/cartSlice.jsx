import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";
import { current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemPrice =
        action.payload.item.price || action.payload.item.defaultPrice || 0;
      const itemQuantity = action.payload.item.quantity || 1;

      state.items.push(action.payload);

      state.totalPrice += itemPrice * itemQuantity;
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.id;

      const updatedItems = state.items.filter(
        (item) => item.item.id !== itemIdToRemove
      );

      const updatedTotalPrice = updatedItems.reduce((total, item) => {
        const itemPrice = item.item.price || item.item.defaultPrice || 0;
        return total + itemPrice * (item.item.quantity || 1);
      }, 0);

      state.items = updatedItems;
      state.totalPrice = updatedTotalPrice;

      // console.log("Item removed. Updated state:", state);
    },
    updateItem: (state, action) => {
      const { id, quantity, price, defaultPrice } = action.payload;
      state.totalPrice = (state.totalPrice + price) | defaultPrice;

      // Logic 1
      // const proxyItem = state.items.find((item) => {
      //   // console.log(item?.item?.id === id);
      //   return item?.item?.id === id;
      // });

      // let item = current(state.items[0].item);
      // console.log("quantity:", item.price);

      // if (proxyItem) {
      //   // item.quantity = quantity;
      //   item.price = (item?.price || 0) * quantity;
      // } else {
      //   console.error("Item not found:", action.payload.id);
      // }

      //  Logic 2
      // const itemIndex = state.items.findIndex((item) => {
      //   // console.log();
      //   const itemID = current(item);
      //   return itemID?.item?.id === id;
      // });
      // if (itemIndex === -1) {
      //   console.error("Item not found:", id);
      // }
      // const item = current(state.items);
      // console.log(itemIndex);
      // item[itemIndex] = {
      //   ...item[itemIndex],
      //   quantity: quantity,
      //   price: item[itemIndex].totalPrice * quantity,
      // };
      // console.log("state: ", current(state));
      // console.log("action: ", action);
      // console.log(
      //   "state.items before update: ",
      //   JSON.stringify(state.items[0])
      // );

      // state.items = state.items.map((proxitemyObject) => {
      //   const item = JSON.parse(JSON.stringify(proxitemyObject?.item));
      //   console.log("Plan Object:", item.id === id);

      //   item.id === id
      //     ? {
      //         ...item, // Spread the existing item to preserve other properties
      //         quantity: 5, // Update the quantity
      //         price: item.defaultPrice * quantity, // Calculate the new price based on quantity
      //       }
      //     : item; // If item doesn't match, keep it as is
      // });
      // console.log("state.items after update: ", JSON.stringify(state.items[0]));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, updateItem } = cartSlice.actions;
export default cartSlice.reducer;
