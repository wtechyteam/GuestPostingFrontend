import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import wishlistReducer from './wishlistSlice'
 
const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer
  },
});
 
export default store;
 