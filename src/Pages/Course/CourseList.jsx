import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout";

const CourseList = () => {
  const dispatch = useDispatch();

  const { courseData } = useSelector((state) => state.course);

  const loadCourses = async () => {
    await dispatch(getAllCourses());
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <HomeLayout>
      {/* courses container for displaying the cards */}
      <div className="min-h-[90vh] pt-12 pl-20 flex flex-col flex-wrap gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold">
          Explore the courses made by{" "}
          <span className="font-bold text-yellow-500">Industry Experts</span>
        </h1>

        {/* wrapper for courses card */}
        <div className="mb-10 flex flex-wrap gap-14">
          {courseData?.map((element) => {
            return <CourseCard key={element._id} data={element} />;
          })}
        </div>
      </div>
    </HomeLayout>
  );
};

export default CourseList;
