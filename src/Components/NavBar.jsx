import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="bg-black p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-xl font-bold">Your Logo</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <div className="hidden md:flex">
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
