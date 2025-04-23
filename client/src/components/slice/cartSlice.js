import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartVisible: false,
    items: [],
  },
  reducers: {
    toggleCart: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
