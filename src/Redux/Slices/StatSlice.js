import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  allUsersCount: 0,
  subscribedCount: 0,
};

// function to get the stats data from backend
export const getStatsData = createAsyncThunk("/stats/get", async () => {
  try {
    const res = axiosInstance.get("/admin/stats/users");

    toast.promise(res, {
      loading: "Getting the Stats",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to Load Stats",
    });

    const response = await res;
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStatsData.fulfilled, (state, action) => {
      state.allUsersCount = action?.payload?.allUsersCount;
      state.subscribedCount = action?.payload?.subscribedCount;
    });
  },
});

export const {} = statSlice.actions;
export default statSlice.reducer;
