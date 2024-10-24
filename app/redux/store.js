import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import wishlistReducer from './wishlistSlice'
import sellerProductsReducer from './sellerSlice';
 

//store to maintain all the reducers and actions
const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    sellerProducts: sellerProductsReducer
  },
});
 
export default store;
 