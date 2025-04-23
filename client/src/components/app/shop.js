import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slice/cartSlice';
import uiReducer from '../slice/uiSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;
