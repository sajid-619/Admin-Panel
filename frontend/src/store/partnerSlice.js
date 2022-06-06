import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createPartner = createAsyncThunk(
  "partner/createPartner",
  async ({ partnerInfo, token }) => {
    const response = await axios.post("/partners", partnerInfo, {
      headers: {
        "x-access-token": token,
      },
    });
    return response.data;
  }
);

export const getAllPartners = createAsyncThunk(
  "partner/getAllPartners",
  async ({ token }) => {
    const response = await axios.get("/partners", {
      headers: {
        "x-access-token": token,
      },
    });
    return response.data;
  }
);

export const deletePartner = createAsyncThunk(
  "partner/deletePartner",
  async ({ id, token }) => {
    const response = await axios.delete(`/partners/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
    if (response.status === 200) return { id };
  }
);

const initialState = {
  partners: [],
  partnerLoading: false,
  partnerError: false,
};

const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},
  extraReducers: {
    // Create new partner
    [createPartner.pending]: (state) => {
      state.partnerLoading = true;
    },
    [createPartner.fulfilled]: (state, action) => {
      state.partnerLoading = false;
      state.partners.push(action.payload);
    },
    [createPartner.rejected]: (state) => {
      state.partnerLoading = false;
      state.partnerError = true;
    },
    // Get all partners
    [getAllPartners.pending]: (state) => {
      state.partnerLoading = true;
    },
    [getAllPartners.fulfilled]: (state, action) => {
      state.productLoading = false;
      state.products = action.payload;
    },
    [getAllPartners.rejected]: (state) => {
      state.productLoading = false;
      state.productError = true;
    },
    // Delete single partner
    [deletePartner.pending]: (state) => {
      state.partnerLoading = true;
    },
    [deletePartner.pending]: (state, action) => {
      state.partnerLoading = false;
      state.partners.splice(
        state.partners.findIndex((item) => item._id === action.payload),
        1
      );
    },
    [deletePartner.rejected]: (state) => {
      state.partnerLoading = false;
      state.partnerLoading = true;
    },
  },
});

export const selectPartnerState = (state) => state.partner;

export default partnerSlice.reducer;