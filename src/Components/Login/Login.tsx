import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userRole = decodedToken.role;

      // Redirect based on role
      if (userRole === "Admin") {
        navigate("/user-list");
      } else {
        navigate("/profile-edit");
      }
      
    }
  }, [navigate]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };

  const validateForm = (): boolean => {
    const formErrors: FormErrors = {};
    let isValid = true;

    if (!formData.email) {
      formErrors.email = "Please enter email address";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = "Please enter password";
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/users/login', {
          email: formData.email,
          password: formData.password,
        });
        
        const { token } = response.data;
        //store the token in local storage
        localStorage.setItem('token', token);

        // Handle successful response
        console.log('Login successful:', token);
        
        
        
           // Decode the token to get the user role
           let userRole = '';
           try {
             const decodedToken = JSON.parse(atob(token.split('.')[1]));
             userRole = decodedToken.role;
           } catch (error) {
             console.error('Invalid token structure:', error);
             return; // Handle invalid token scenario
           }

         // Redirect based on role
         if (userRole === "Admin") {
          navigate("/user-list");
        } else {
          navigate("/profile-edit");
        }
  
      } catch (error) {
        console.error('Error during login:', error);
        setErrors({ password: 'Incorrect email or password' });
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-700">
        <div className="container w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-3">Login</h2>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow border rounded w-full py-2 px-3 text-gray-700 ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="text"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="text-red-600 text-sm mt-2">
                {errors.email}
              </span>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`shadow border rounded w-full py-2 px-3 text-gray-700 ${
                  errors.password ? "border-red-500" : ""
                }`}
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="text-red-600 none text-sm mt-2">
                  {errors.password}
                </span>
              )}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full"
              type="submit"
              
            >
              Login
            </button>
            <p className="mt-3 font-medium text-center">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-blue-500 hover:text-blue-700 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
