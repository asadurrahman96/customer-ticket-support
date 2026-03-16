import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-white border-b border-gray-200 px-6 md:px-10 container mx-auto">
      <div className="flex-1">
        <a href="/" className="text-2xl font-bold text-black">
          Customer Support ticketing
        </a>
      </div>

      <div className="flex-none hidden lg:flex items-center gap-1">
        <a
          href="#home"
          className="btn btn-ghost text-black hover:text-gray-700 text-base font-medium"
        >
          Home
        </a>
        <a
          href="#faq"
          className="btn btn-ghost text-black hover:text-gray-700 text-base font-medium"
        >
          FAQ
        </a>
        <a
          href="#changelog"
          className="btn btn-ghost text-black hover:text-gray-700 text-base font-medium"
        >
          Changelog
        </a>
        <a
          href="#blog"
          className="btn btn-ghost text-black hover:text-gray-700 text-base font-medium"
        >
          Blog
        </a>
        <a
          href="#download"
          className="btn btn-ghost text-black hover:text-gray-700 text-base font-medium"
        >
          Download
        </a>
        <a
          href="#contact"
          className="btn btn-ghost text-black hover:text-gray-700 text-base font-medium mr-3"
        >
          Contact
        </a>

        
        <button className="btn bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-6">
        +  New Ticket
        </button>
      </div>

      <div className="flex-none lg:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
       
    );
};

export default Navbar;