import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        setUserRole(decodedToken.role);
        setUserFirstName(decodedToken.firstName); 
        setUserLastName(decodedToken.lastName);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="container w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center mb-3">Profile</h2>
        <div className="text-center mt-5">
          <p className='font-bold text-2xl'>Welcome, {userFirstName} {userLastName}</p>
          <p className='mt-2 font-medium mb-4'>Your role is: {userRole}</p>
          <NavLink
                to={"/profile-edit"}
                className="rounded-md border-2 px-2 py-1"
              >
                Edit Profile
              </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;