import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
    const links = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li> <NavLink to="/about">About</NavLink></li>
        <li> <NavLink to="/listedbooks">Listed Books</NavLink></li>
      <li><NavLink to="/pagestoread">Pages To Read</NavLink></li>  
      
    </>
    return (
        <div className='mx-10'>
            <div className="navbar text-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                classNamß
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-black">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {/* <div className="signin navbar-end">
                   
                </div> */}
                <div className="navbar-end">
                <a className="btn bg-[#3ABEAF] text-white border-none mr-2">Sign In</a>
                    <a className="btn bg-cyan-500 text-white border-none">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;