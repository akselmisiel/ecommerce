import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-auto pb-2 bg-white flex flex-col justify-start items-center gap-3 z-50 relative">
      <div className="w-full sm:hidden h-[58px] pt-[9px] pb-[3px] bg-slate-800 flex justify-between items-center px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1 p-2.5 rounded-[5px] text-white text-sm font-bold">
            <i className="fa-solid fa-phone" /> (225) 555-0118
          </span>
          <span className="flex items-center gap-1 p-2.5 rounded-[5px] text-white text-sm font-bold">
            <i className="fa-regular fa-envelope" /> michelle.rivera@example.com
          </span>
        </div>
        <span className="p-2.5 text-white text-sm font-bold">
          Follow Us and get a chance to win 80% off
        </span>
        <div className="flex items-center gap-2.5 p-2.5">
          <span className="text-white text-sm font-bold">Follow Us:</span>
          <div className="flex items-center gap-1">
            <a href="https://instagram.com" className="p-1 flex items-center">
              <i className="fa-brands fa-instagram text-white" />
            </a>
            <a href="https://youtube.com" className="p-1 flex items-center">
              <i className="fa-brands fa-youtube text-white" />
            </a>
            <a href="https://facebook.com" className="p-1 flex items-center">
              <i className="fa-brands fa-facebook text-white" />
            </a>
            <a href="https://x.com" className="p-1 flex items-center">
              <i className="fa-brands fa-twitter text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-between items-center sm:flex-col sm:pt-5">
        <span className="pr-[79px] py-[13px] text-slate-800 text-2xl font-bold sm:hidden">
          Bandage
        </span>
        <div className="sm:flex items-center gap-6 hidden justify-between w-full">
          <span className="text-slate-800 text-2xl font-bold">Bandage</span>
          <div className="hidden sm:flex items-center gap-6">
            <i className="fa-solid fa-magnifying-glass" />
            <i className="fa-solid fa-cart-shopping" />
            <i className="fa-solid fa-bars" />
          </div>
        </div>
        <div className="w-screen flex justify-between items-center sm:flex-col sm:pb-20 sm:pt-20">
          <nav className="flex items-center gap-8 sm:flex-col">
            <Link
              to="/"
              className="text-neutral-400 text-sm font-bold sm:font-normal sm:text-3xl sm:hover:font-thin"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="hidden sm:flex text-neutral-400 text-sm font-bold sm:font-normal sm:text-3xl hover:font-thin"
            >
              Product
            </Link>
            <Link
              to="/pricing"
              className="hidden sm:flex text-neutral-400 text-sm font-bold sm:font-normal sm:text-3xl hover:font-thin"
            >
              Pricing
            </Link>
            <Link
              to="/shop"
              className="text-slate-800 text-sm font-medium sm:hidden"
            >
              Shop <i className="fa-solid fa-caret-down" />
            </Link>
            <Link
              to="/about"
              className="text-neutral-400 text-sm font-bold sm:hidden"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-neutral-400 text-sm font-bold sm:hidden"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-neutral-400 text-sm font-bold sm:font-normal sm:text-3xl sm:hover:font-thin"
            >
              Contact
            </Link>
            <Link
              to="/pages"
              className="text-neutral-400 text-sm font-bold sm:hidden"
            >
              Pages
            </Link>
          </nav>
          <div className="flex items-center gap- sm:hidden">
            <span className="flex items-center p-[15px] rounded-[37px] gap-2 text-center text-sky-500 text-sm font-bold">
              <i className="fa-regular fa-user"></i> Login / Register
            </span>
            <div className="w-[46px] h-[46px] flex justify-center items-center p-[15px] rounded-[37px]">
              <div className="w-4 h-4 flex justify-center items-center">
                <i className="fa-solid fa-magnifying-glass text-sky-500" />
              </div>
            </div>
            <div className="w-14 h-[46px] flex justify-center gap-2 items-center p-[15px] rounded-[37px]">
              <div className="w-4 h-4 pr-px pt-px flex justify-center items-center">
                <i className="fa-solid fa-cart-shopping text-sky-500" />
              </div>
              <span className="text-center text-sky-500 text-xs font-normal">
                1
              </span>
            </div>
            <div className="w-14 h-[46px] flex justify-center gap-2 items-center p-[15px] rounded-[37px]">
              <div className="w-4 h-4 pb-px flex justify-center items-center">
                <i className="fa-regular fa-heart text-sky-500" />
              </div>
              <span className="text-center text-sky-500 text-xs font-normal">
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
