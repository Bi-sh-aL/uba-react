import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface FormData {
  loginEmail: string;
  loginPassword: string;
}

interface FormErrors {
  loginEmail?: string;
  loginPassword?: string;
}

function Login() {
  const [formData, setFormData] = useState<FormData>({
    loginEmail: "",
    loginPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

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

    if (!formData.loginEmail) {
      formErrors.loginEmail = "Please enter email address";
      isValid = false;
    } else if (!validateEmail(formData.loginEmail)) {
      formErrors.loginEmail = "Invalid email address";
      isValid = false;
    }

    if (!formData.loginPassword) {
      formErrors.loginPassword = "Please enter password";
      isValid = false;
    } else if (formData.loginPassword.length < 6) {
      formErrors.loginPassword = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful form submission
      console.log("Form submitted successfully");
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
                htmlFor="loginEmail"
              >
                Email
              </label>
              <input
                className={`shadow border rounded w-full py-2 px-3 text-gray-700 ${
                  errors.loginEmail ? "border-red-500" : ""
                }`}
                type="text"
                id="loginEmail"
                name="loginEmail"
                placeholder="Enter email"
                value={formData.loginEmail}
                onChange={handleChange}
              />
              <span className="text-red-600 text-sm mt-2">
                {errors.loginEmail}
              </span>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="loginPassword"
              >
                Password
              </label>
              <input
                className={`shadow border rounded w-full py-2 px-3 text-gray-700 ${
                  errors.loginPassword ? "border-red-500" : ""
                }`}
                type="password"
                id="loginPassword"
                name="loginPassword"
                placeholder="Enter password"
                value={formData.loginPassword}
                onChange={handleChange}
              />
              {errors.loginPassword && (
                <span className="text-red-600 none text-sm mt-2">
                  {errors.loginPassword}
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
