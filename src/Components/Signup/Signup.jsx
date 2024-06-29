import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    signupUsername: "",
    signupEmail: "",
    mobileNumber: "",
    signupPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(String(email).toLowerCase());
  }
  function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
    return passwordPattern.test(password);
  }

  function validateMobileNumber(mobileNumber) {
    const mobilePattern = /^[0-9]{10}$/;
    return mobilePattern.test(String(mobileNumber));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if(!formData.signupUsername){
      formErrors.signupUsername = "Username is required";
      isValid = false;
    }

    if(!formData.signupEmail){
      formErrors.signupEmail = "Email address is required"
      isValid = false;
    }else if(!validateEmail(formData.signupEmail)){
      formErrors.signupEmail = "Invalid email address"
      isValid = false;
    }

    if(!formData.signupPassword){
      formErrors.signupPassword = "Password is required"
      isValid = false;
    }else if(formData.signupPassword.length < 6){
      formErrors.signupPassword = "Password must be at least 6 characters"
      isValid = false;
    }else if(!validatePassword(formData.signupPassword)){
      formErrors.signupPassword = "Password must contain atleast one UPPERCASE, one number and one special character"
      isValid= false;
    }
    
    if (!formData.confirmPassword) {
      formErrors.confirmPassword = 'Please confirm password';
      isValid = false;
    }
    else if(formData.signupPassword !== formData.confirmPassword){
      formErrors.confirmPassword = "Passwords do not match"
      isValid = false;
    }

    if(!formData.mobileNumber){
      formErrors.mobileNumber = "Mobile number is required"
      isValid = false;
    }
    else if(!validateMobileNumber(formData.mobileNumber)){
      formErrors.mobileNumber = "Invalid mobile number"
      isValid = false;
    }
    setErrors(formErrors);
    return isValid;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(validateForm()){
      alert("Form submitted successfully")
    }
  }

  return (
    <>
      <div className=" flex items-center min-h-screen min-w-screen justify-center py-4 bg-gray-700">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-center mb-3 text-2xl font-bold">Sign Up</h2>
          <form id="signupForm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-md text-gray-700 mb-2 font-bold"
                htmlFor="signupUsername"
              >
                Username
              </label>
              <input
                className={`border w-full py-2 px-2 text-gray-700 shadow rounded ${
                  errors.signupUsername ? "border-red-500" : ""
                }`}
                type="text"
                id="signupUsername"
                name="signupUsername"
                placeholder="Enter username"
                value={formData.signupUsername}
                onChange={handleChange}
              />
              <span
                className="text-red-600 text-sm mt-2"
              >
                {errors.signupUsername}
              </span>
            </div>
            <div className="mb-4">
              <label
                className="block font-bold mb-2 text-gray-700"
                htmlFor="signupEmail"
              >
                Email
              </label>
              <input
                className={`border w-full py-2 px-2 text-gray-700 shadow rounded ${
                  errors.signupEmail ? "border-red-500" : ""
                }`}
                type="text"
                id="signupEmail"
                name="signupEmail"
                placeholder="Enter email address"
                value={formData.signupEmail}
                onChange={handleChange}
              />
               <span
                className="text-red-600 text-sm mt-2"
              >
                {errors.signupEmail}
              </span>
            </div>
            <div className="mb-4">
              <label
                className="block font-bold mb-2 text-mm text-gray-700"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                className={`border w-full py-2 px-2 text-gray-700 shadow rounded ${
                  errors.mobileNumber ? "border-red-500" : ""
                }`}
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
             <span
                className="text-red-600 text-sm mt-2"
              >
                {errors.mobileNumber}
              </span>
            </div>
            <div className="mb-4">
              <label
                className="block font-bold text-md mb-2 text-gray-700"
                htmlFor="signupPassword"
              >
                Password
              </label>
              <input
                className={`border w-full py-2 px-2 text-gray-700 shadow rounded ${
                  errors.signupPassword ? "border-red-500" : ""
                }`}
                type="password"
                id="signupPassword"
                name="signupPassword"
                placeholder="Enter password"
                value={formData.signupPassword}
                onChange={handleChange}
              />
              <span
                className="text-red-600 text-sm mt-2"
              >
                {errors.signupPassword}
              </span>
            </div>
            <div className="mb-4">
              <label
                className="block font-bold text-md mb-2 text-gray-700"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className={`border w-full py-2 px-2 text-gray-700 shadow rounded ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confrim password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                className="text-red-600 text-sm mt-2"
              >
                {errors.confirmPassword}
              </span>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 w-full rounded "
              type="submit"
            >
              Sign Up
            </button>
            <p className="text-center text-l text-gray-700 font-medium mt-3">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-500 hover:text-blue-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
