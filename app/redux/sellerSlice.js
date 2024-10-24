import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const hostedURL = process.env.NEXT_PUBLIC_HOSTED_URL;
const localbaseURL = process.env.NEXT_PUBLIC_BASE_URL;

const apiURL = hostedURL || localbaseURL;

// Async thunk to fetch all products for a specific seller
export const fetchSellerProducts = createAsyncThunk(
  "products/fetchSellerProducts",
  async (sellerId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${hostedURL}/products/seller/${sellerId}`);
      console.log(response.data)
      return response.data;

    } catch (error) {
      return rejectWithValue(error.response.data || "Something went wrong");
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
const sellerSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProducts.pending, (state) => {
        state.loading = true;
        console.log("pending");
        state.error = null;
      })
      .addCase(fetchSellerProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Ensure payload is correct
        console.log("State after fulfilled case:", state);  // Log the entire state after update
      })
            
      .addCase(fetchSellerProducts.rejected, (state, action) => {
        state.loading = false;
        console.log("rejected");
        state.error = action.payload || "Failed to fetch seller products";
      });
  },
});

export default sellerSlice.reducer;
