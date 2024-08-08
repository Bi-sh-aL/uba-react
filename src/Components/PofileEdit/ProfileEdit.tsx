import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Link, NavLink } from "react-router-dom";

interface DecodedToken extends JwtPayload {
  id: number;
  email: string;
}

function ProfileEdit() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token not found");
      return;
    }
  
    const decodedToken = jwtDecode<DecodedToken>(token);
    const userId = decodedToken.id;
  
    const fetchUserData =async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            credentials: "include",
          },
        });
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setMobileNumber(response.data.mobileNumber);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
    
  }, []);

  if (error) {
    return <div>{error}</div>;
    
  }

  return (
    <div className="flex items-center min-h-screen min-w-screen justify-center py-4 bg-gray-700">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-center mb-3 text-2xl font-bold">Edit Profile</h2>
        <form
          id="profileForm"
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          <div className="mb-4">
            <label
              className="block text-md text-gray-700 mb-2 font-bold"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="border w-full py-2 px-2 text-gray-700 shadow rounded"
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-md text-gray-700 mb-2 font-bold"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="border w-full py-2 px-2 text-gray-700 shadow rounded"
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-md text-gray-700 mb-2 font-bold"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="border w-full py-2 px-2 text-gray-700 shadow rounded"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-md text-gray-700 mb-2 font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border w-full py-2 px-2 text-gray-700 shadow rounded"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-md text-gray-700 mb-2 font-bold"
              htmlFor="phone"
            >
              Mobile Number
            </label>
            <input
              className="border w-full py-2 px-2 text-gray-700 shadow rounded"
              type="text"
              id="phone"
              name="phone"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter mobile number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-md text-gray-700 mb-2 font-bold"
              htmlFor="currentPassword"
            >
              Old Password
            </label>
            <input
              className="border w-full py-2 px-2 text-gray-700 shadow rounded"
              type="password"
              id="currentPassword"
              name="currentPassword"
              placeholder="Enter your old password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-md text-gray-700 mb-2 font-bold"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              className="border w-full py-2 px-2 text-gray-700 shadow rounded"
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-md text-gray-700 mb-2 font-bold"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="border w-full py-2 px-2 text-gray-700 shadow rounded"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm new password"
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 w-full rounded col-span-1 md:col-span-2"
          >
            Update Profile
          </button>
        
            
        
            <NavLink to={"/profile"} 
            className="bg-red-500 hover:bg-red-700 text-white text-center py-2 w-full rounded col-span-1 md:col-span-2">Cancel</NavLink>
        
          
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
