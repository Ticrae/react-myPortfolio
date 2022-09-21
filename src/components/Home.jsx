import React from "react";
import displayImage from "../assets/displayImage.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full text-jet w-full bg-white py-32 sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-jet">
            I'm a Full Stack Developer
          </h2>
          <p className="py-4 text-indigoDye max-w-md">
            I have 2 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Javascript, Custom css, PHP and Mysql.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-jet w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gainsboro cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" size={13} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={displayImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-full shadow-md shadow-gainsboro hover:scale-105 duration-200"
            width={"100px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
