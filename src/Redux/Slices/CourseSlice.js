import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseData: [],
};

// function to get all courses
export const getAllCourses = createAsyncThunk("/course/get", async () => {
  try {
    const response = axiosInstance.get("/courses");

    toast.promise(response, {
      loading: "Loading Course Data",
      success: "Courses Loaded Successfully",
      error: "Failed to get the Courses",
    });

    return (await response).data.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const courseSlice = createSlice({
  name: "Courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action.payload) {
        state.courseData = [...action.payload];
      }
    });
  },
});

export default courseSlice.reducer;
