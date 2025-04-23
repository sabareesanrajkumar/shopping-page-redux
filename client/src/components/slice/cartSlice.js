import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartVisible: false,
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    toggleCart: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) return;

      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },
    replaceCart(state, action) {
      const { items, totalQuantity } = action.payload || {};

      state.items = items ?? [];
      state.totalQuantity = totalQuantity ?? 0;
    },
  },
});

export const { toggleCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
