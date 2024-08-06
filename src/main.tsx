import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, Login, Signup, ProfileEdit, UserList} from "./Index"
import Protected from './Components/Protected'

// Function to get user role from token
const getUserRole = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  return decodedToken.role || null;
};


// Function to create routes based on user role
const createRoutes = () => {
  const userRole = getUserRole();

  return createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='profile-edit' element={<Protected Component={ProfileEdit} />} />
       <Route path='user-list' element={<Protected Component={UserList} />} />
      
    </Route>
  );
};

const router = createBrowserRouter(createRoutes());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)