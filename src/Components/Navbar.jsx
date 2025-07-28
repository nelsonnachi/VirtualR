import React, {useState} from "react";
import logo from "../assets/logo.png";
import { navItems } from "../Constant/index";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";




const Navbar = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
  const toggleNavbar = () =>{
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 ">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualLR</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a className="py-2 px-3 border rounded-md" href="#">Sign In</a>
            <a className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md" href="#">Create an account</a>
          </div>

          {/* mobile respinsiveness togle menu*/}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <BiMenu fontSize={36}/> : <BiMenu fontSize={36}/>}
            </button>
          </div>
        </div>

        {/* mobile respinsiveness display navlinks */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-[65px] z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a className="py-2 px-3 border rounded-md" href='#'>Sign In</a>
              <a className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800" href='#'>Create an account</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
