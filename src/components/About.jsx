import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full py-24 text-jet bg-white sm:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gainsboro inline">
            About
          </p>
        </div>
        <p className="text-xl mt-2">
          I'm Ukobo Utibeabasi, a passionate junior full stack developer who
          likes solving problems by creating value through codes
        </p>
        <br />
        <p className="text-xl">
          I'm dedicated to providing services such as web applications and pages
          that are user friendly and responsive. I possess good communication
          and written skills
        </p>
      </div>
    </div>
  );
};

export default About;
