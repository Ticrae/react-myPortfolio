import React from "react";
import adminDashboard from "../assets/portfolio/adminDashboard.png";
import fashion from "../assets/portfolio/fashion.png";
import foodApp from "../assets/portfolio/foodApp.png";
import movieApp from "../assets/portfolio/movieApp.png";
import projectphp from "../assets/portfolio/projectphp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: adminDashboard,
      href: "https://github.com/Ticrae/AdminDashboard",
      demo: "https://utibeabasi-admin-dashboard.netlify.app/",
    },
    {
      id: 2,
      src: fashion,
      href: "https://github.com/Ticrae/gorek",
      demo: "",
    },
    {
      id: 3,
      src: foodApp,
      href: "https://github.com/Ticrae/react-foodApp",
      demo: "",
    },
    {
      id: 4,
      src: movieApp,
      href: "https://github.com/Ticrae/MovieApp",
      demo: "https://utibeabasi-movieapp.netlify.app/",
    },
    {
      id: 5,
      src: projectphp,
      href: "",
      demo: "",
    },
  ];

  return (
    <div name="portfolio" className="h-full py-24 bg-white text-jet w-full">
      <div className="w-full max-w-screen-lg p-4 mx-auto flex flex-col h-full justify-center">
        <div className="pb-8">
          <p className="text-4xl border-b-4 border-gainsboro font-bold inline">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, demo }) => (
            <div key={id} className="shadow-md shadow-gainsboro rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center bg-white text-jet">
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={demo}
                >
                  Demo
                </a>

                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={href}
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
