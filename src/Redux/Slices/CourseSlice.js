import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

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
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return (await response).data.courses;
  }
});

const courseSlice = createSlice({
  name: "Courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default courseSlice.reducer;
