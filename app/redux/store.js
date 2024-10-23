import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import wishlistReducer from './wishlistSlice'
import sellerReducer from './sellerSlice'
 

//store to maintain all the reducers and actions
const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    seller: sellerReducer
  },
});
 
export default store;
 