import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../assets/Images/aboutMainImage.png";

import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData";

const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        {/* creating the about page main section */}
        <div className="flex items-center gap-5 mx-10 ">
          {/* About Section */}
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their creativity, skills and knowledge to each
              other to empower and contribute in the growth and wellness of the
              mankind.
            </p>
          </section>

          {/* About Section Image */}
          <div className="w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
              }}
              className="drop-shadow-2xl"
              src={aboutMainImage}
              alt="aboutMainImage"
            />
          </div>
        </div>

        {/* top personalities quotes section */}
        <div className="carousel m-auto w-1/2 my-16">
          {celebrities &&
            celebrities.map((celebrity) => (
              <CarouselSlide
                {...celebrity}
                key={celebrity.slideNumber}
                totalSlides={celebrities.length}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;
