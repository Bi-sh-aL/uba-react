import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        setInterval(() => {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token);
        }, 1)
        // Check if user is logged in based on token in local storage
        // const token = localStorage.getItem('token');
        // setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        // Remove token from local storage
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = "/login"; // Redirect to home
    };
    

    return (
        <header className="shadow sticky z-10 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    <h3 className="text-3xl font-bold">UBA-<span className="text-blue-800">IMS</span></h3>
                </Link>
                <div className="flex items-center lg:order-2 md:order-2">
                    {isLoggedIn ? (
                        <>
                        
                        <button
                            onClick={handleLogout}
                            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log Out
                        </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to={"/login"}
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log In
                            </Link>
                            <Link
                                to={"/signup"}
                                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 md:flex md:w-auto"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink
                                to={"/"}
                                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-700 lg:p-0"
                            >
                                Home
                            </NavLink>
                            
                        </li>
                        <li>
                            <NavLink
                                to={"/profile-edit"}
                                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-700 lg:p-0"
                            >
                                Edit Profile
                            </NavLink>
                            
                        </li>
                        <li>
                            <NavLink
                                to={"/user-list"}
                                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-700 lg:p-0"
                            >
                                User List
                            </NavLink>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}