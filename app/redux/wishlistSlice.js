import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const hostedURL = process.env.NEXT_PUBLIC_HOSTED_URL;
const localbaseURL = process.env.NEXT_PUBLIC_BASE_URL;

const apiURL = hostedURL || localbaseURL;

// Initial state for the wishlist slice
const initialState = {
  wishlist: [], // Initialize as an empty array
  isLoading: false,
  error: null,
};

// Async thunk to get the user's wishlist products
export const getWishlist = createAsyncThunk(
  "wishlist/get",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("authToken");
      const response = await axios.get(`${apiURL}/wishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data; // Return the wishlist products
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching wishlist");
    }
  }
);

// Async thunk to add a product to the wishlist
export const addToWishlist = createAsyncThunk(
  "wishlist/add",
  async (productId, { rejectWithValue }) => {
    try {
      const token = Cookies.get("authToken");
      await axios.post(
        `${apiURL}/wishlist/${productId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return productId; // Return the product ID for the wishlist
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error adding to wishlist");
    }
  }
);

// Async thunk to remove a product from the wishlist
export const removeFromWishlist = createAsyncThunk(
  "wishlist/remove",
  async (productId, { rejectWithValue }) => {
    try {
      const token = Cookies.get("authToken");
      await axios.delete(`${apiURL}/wishlist/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return productId; // Return the product ID to remove from wishlist
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error removing from wishlist");
    }
  }
);

// Create the wishlist slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Get Wishlist
      .addCase(getWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishlist = action.payload; // Set wishlist products from the payload
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle Add to Wishlist
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!state.wishlist.includes(action.payload)) {
          state.wishlist.push(action.payload); // Only add if not already in wishlist
        }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle Remove from Wishlist
      .addCase(removeFromWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishlist = state.wishlist.filter((productId) => productId !== action.payload);
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer to use in the store
export default wishlistSlice.reducer;
