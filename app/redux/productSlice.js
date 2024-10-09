import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
 
// Async thunk to fetch all products
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const response = await axios.get("http://localhost:3001/api/products");
    return response.data;
  }
);
 
// Async thunk to fetch blocked products for the current user
export const fetchBlockedProducts = createAsyncThunk(
  "products/fetchBlocked",
  async () => {
    const token = Cookies.get("authToken");
    const response = await axios.get(
      "http://localhost:3001/api/blockedProducts",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
);
 
// Async thunk to fetch unblocked products for the current user
export const fetchUnblockedProducts = createAsyncThunk(
  "products/fetchUnblocked",
  async () => {
    const token = Cookies.get("authToken");
    const response = await axios.get(
      "http://localhost:3001/api/unblockedProducts",
      {
        headers: { Authorization: `Bearer ${token}`},
      }
    );
    return response.data;
  }
);
 
// Async thunk to block a product
export const blockProduct = createAsyncThunk(
  "products/block",
  async (productId, { rejectWithValue }) => {
    const token = Cookies.get("authToken");
    try {
      await axios.post(
        `http://localhost:3001/api/block/${productId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return productId; // Return productId for further processing in the reducer
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error data
    }
  }
);
 
// Async thunk to unblock a product
export const unblockProduct = createAsyncThunk(
  "products/unblock",
  async (productId, { rejectWithValue }) => {
    const token = Cookies.get("authToken");
    
    try {
      const response = await axios.post(
        `http://localhost:3001/api/unblock/${productId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data; // Ensure you return necessary data
    } catch (error) {
      console.error("Error in unblockProduct thunk:", error);
      return rejectWithValue(error.response.data);
    }
  }
);
 
 
 
// Initial state
const initialState = {
  products: [],
  blockedProducts: [],
  unblockedProducts: [],
  loading: false,
  error: null,
};
 
// Create product slice
const productSlice = createSlice({
  name: "products",
  initialState,
  blockedProducts: [],
  unblockedProducts: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchBlockedProducts.fulfilled, (state, action) => {
        state.blockedProducts = action.payload;
      })
      .addCase(fetchUnblockedProducts.fulfilled, (state, action) => {
        state.unblockedProducts = action.payload;
      })
      .addCase(blockProduct.fulfilled, (state, action) => {
        // Ensure that action.payload contains just the productId
        const productId = action.payload; // Assuming payload is just the ID
    
        console.log('Blocking product:', productId);
        console.log('Current products before removal:', state.products);
    
        // Remove blocked product from products list
        state.products = state.products.filter((product) => product._id !== productId);
    
        console.log('Updated products after removal:', state.products);
    
        // Ensure blockedProducts is an array before pushing
        if (!Array.isArray(state.blockedProducts)) {
            console.error('blockedProducts is not an array. Initializing as an empty array.');
            state.blockedProducts = [];
        }
    
        // Push the productId into blockedProducts
        state.blockedProducts.push(productId);
    })
    
    
    .addCase(unblockProduct.fulfilled, (state, action) => {
      const productId = action.payload;
 
      // Remove the product from blockedProducts
      state.blockedProducts = state.blockedProducts.filter((id) => id !== productId);
 
      // Retrieve the original product from allProducts and add it back to products
      const unblockedProduct = state.products.find((product) => product._id === productId);
      if (unblockedProduct) {
        state.products.push(unblockedProduct);
      } else {
        console.warn(`Unblocked product with ID ${productId} not found in allProducts.`);
      }
    })
    .addCase(blockProduct.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(unblockProduct.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
 
export default productSlice.reducer;