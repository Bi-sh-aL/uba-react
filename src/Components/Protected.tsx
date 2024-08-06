import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props: { Component: any }) {
    const {Component} = props
    const navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token){
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            const userRole = decodedToken.role;
        }else{
            navigate('/login')
        }
    })
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected