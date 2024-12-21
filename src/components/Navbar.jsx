import React, { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-2xl bg-[#525252]">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 flex items-center gap-4">
            
            <img className="w-12 h-12" src={logo} alt="" />
            </div>

        {/* Links (Desktop View) */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to='/' className="text-white hover:text-indigo-600 font-medium">
            Home
          </NavLink>
          <NavLink to='/addjobs' className="text-white hover:text-indigo-600 font-medium">
            Add Jobs
          </NavLink>
          <NavLink to='/' className="text-white hover:text-indigo-600 font-medium">
            My Posted Jobs
          </NavLink>
          <NavLink to='/' className="text-white hover:text-indigo-600 font-medium">
          My Bids
          </NavLink>
          <NavLink to='/' className="text-white hover:text-indigo-600 font-medium">
          Bid Requests
          </NavLink>
          <NavLink to='/auth/login' className="text-white hover:text-indigo-600 font-medium">
            Login
          </NavLink>
          <NavLink to='/auth/register' className="text-white hover:text-indigo-600 font-medium">
            Register
          </NavLink>
        </nav>

        {/* Search Bar */}
        {/* <div className="hidden md:flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div> */}

        {/* Icons */}
        {/* <div className="hidden md:flex space-x-4">
          <button className="text-gray-700 hover:text-indigo-600">
            <i className="fas fa-heart text-xl"></i>
          </button>
          <button className="text-gray-700 hover:text-indigo-600">
            <i className="fas fa-shopping-cart text-xl"></i>
          </button>
        </div> */}

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-indigo-600"
        >
          <FiAlignRight />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-white hover:text-indigo-600 font-medium">
              Home
            </a>
            <a href="#products" className="text-white hover:text-indigo-600 font-medium">
              Products
            </a>
            <a href="#about" className="text-white hover:text-indigo-600 font-medium">
              About
            </a>
            <a href="#contact" className="text-white hover:text-indigo-600 font-medium">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
