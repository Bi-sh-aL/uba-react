import React, { useEffect, useState } from 'react';

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
        console.log(userFirstName);
        console.log(token)
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  return (
    <div>
      <h1>Welcome,{userFirstName} {userLastName}</h1>
      <p>Your role is: {userRole}</p>
    </div>
  );
};

export default Profile;
