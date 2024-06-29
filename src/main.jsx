import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./Components/Home/Home.jsx"
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import ProfileEdit from './Components/Pofile/ProfileEdit.jsx'
import UserList from './Components/UserList/UserList.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path= "" element ={<Home/>}/>
      <Route path= 'login' element= {<Login/>}/>
      <Route path= 'signup' element= {<Signup/>}/>
      <Route path= 'profile-edit' element = {<ProfileEdit/>} />
      <Route path= 'user-list' element = {<UserList/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
