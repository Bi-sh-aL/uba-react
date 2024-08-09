import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, Login, Signup, ProfileEdit, UserList} from "./Index"
import Protected from './Components/Protected'
import Forbidden from './Components/Forbidden'


const createRoutes = () => {

  return createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<Protected Component={Home} />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='profile-edit' element={<Protected Component={ProfileEdit} />} />
      <Route path='user-list' element={<Protected Component={UserList} requiredRole='Admin'/>} />
      <Route path='forbidden' element={<Forbidden />} />
      
    </Route>
  );
};

const router = createBrowserRouter(createRoutes());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)