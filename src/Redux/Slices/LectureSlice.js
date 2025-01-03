import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  lectures: [],
};

// function to get all the lectures
export const getCourseLectures = createAsyncThunk(
  "/course/lecture/get",
  async (courseId) => {
    try {
      const res = axiosInstance.get(`/courses/${courseId}`);

      toast.promise(res, {
        loading: "Fetching the Lectures",
        success: "Lectures fetched Successfully",
        error: "Failed to fetch Lectures",
      });

      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// function to add new lecture to the course
export const addCourseLecture = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    const formData = new FormData();
    formData.append("lecture", data.lecture);
    formData.append("title", data.title);
    formData.append("description", data.description);

    try {
      const res = axiosInstance.post(`/courses/${data.id}`, formData);

      toast.promise(res, {
        loading: "Adding Lecture",
        success: "Lecture added Successfully",
        error: "Failed to add Lecture",
      });

      const response = await res;

      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// function to delete the lecture from the course
export const deleteCourseLecture = createAsyncThunk(
  "/course/lecture/delete",
  async (data) => {
    console.log(data);
    try {
      const res = axiosInstance.delete(
        `/courses/?courseId=${data.courseId}&lectureId=${data.lectureId}`
      );

      toast.promise(res, {
        loading: "Deleting Course Lecture",
        success: "Lecture Deleted Successfully",
        error: "Failed to Delete Lecture",
      });

      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseLectures.fulfilled, (state, action) => {
        console.log(action);
        state.lectures = action?.payload?.lectures;
      })
      .addCase(addCourseLecture.fulfilled, (state, action) => {
        console.log(action);
        state.lectures = action?.payload?.course?.lectures;
      });
  },
});

export default lectureSlice.reducer;
