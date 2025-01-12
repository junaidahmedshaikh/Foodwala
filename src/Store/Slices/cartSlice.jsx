import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      // console.log("state.items ", state.items);

      // const existingItem = state.items.find((ProxyItem) => {
      // const item = current(ProxyItem?.item) || current(ProxyItem);
      //   item.id === action?.payload?.id;
      // });

      // if (existingItem) {
      //   console.log("Item Already Exists:", current(existingItem)); // Debugging log
      // } else {
      //   console.log("Added Successfully:", action.payload);
      // }
      state.totalPrice = action?.payload?.item?.price;
      // console.log(item);
      state.items.push(action.payload); // Add new item
    },
    removeItem: (state, action) => {
      state.items.pop();
      state.totalPrice -= action?.payload?.price;
    },
    updateItem: (state, action) => {
      const { id, quantity, price } = action.payload;

      // const item = current(state?.items);
      // const totalItemPrice = item.reduce((sum, acc) => {
      //   // console.log("acc: ", );
      //   return (sum += acc.item.price * quantity);
      // }, 0);
      // console.log("Brfore: ", state.totalPrice);
      state.totalPrice = state.totalPrice + price;
      // console.log(state?.totalPrice);
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
