import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <>
      <footer className="relative left-0 py-5 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800  sm:px-20">
        <section className="text-lg select-none">
          © Coursify Copyright {year} | All Rights Reserved. Made By ❤️‍🔥{" "}
          <Link
            className="font-semibold cursor-pointer"
            to="https://chinmaykaitadeportfolio.vercel.app/"
          >
            Chinmay Kaitade
          </Link>
        </section>

        <section className="flex items-center justify-center gap-5 text-2xl text-white">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <Link to="https://www.facebook.com/chinmaydotcom">
              <BsFacebook />
            </Link>
          </a>

          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <Link to="https://www.instagram.com/chinmaykaitade_hunter/">
              <BsInstagram />
            </Link>
          </a>

          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <Link to="https://www.linkedin.com/in/chinmay-sharad-kaitade">
              <BsLinkedin />
            </Link>
          </a>

          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <Link to="https://github.com/ChinmayKaitade">
              <BsGithub />
            </Link>
          </a>

          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <Link to="https://x.com/chinmaydotcom">
              <BsTwitterX />
            </Link>
          </a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
