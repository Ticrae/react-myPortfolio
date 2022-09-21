import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "about",
    },
    {
      id: 3,
      name: "portfolio",
    },
    {
      id: 4,
      name: "experience",
    },
    {
      id: 5,
      name: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-jet fixed bg-white">
      <div>
        <h1 className="text-5xl font-signature ml-2">Utibeabasi</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, name }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-indigoDye hover:scale-105 duration-200"
          >
            <Link to={name} smooth duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-jet md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-white">
          {links.map(({ id, name }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize text-indigoDye text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={name}
                smooth
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
