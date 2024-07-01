import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./Components/Home/Home.js"
import Login from './Components/Login/Login.js'
import Signup from './Components/Signup/Signup.js'
import ProfileEdit from './Components/Pofile/ProfileEdit.js'
import UserList from './Components/UserList/UserList.js'

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
