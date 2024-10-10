import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import wishlistReducer from './wishlistSlice'
 

//store to maintain all the reducers and actions
const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer
  },
});
 
export default store;
 