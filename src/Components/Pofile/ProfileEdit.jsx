function ProfileEdit() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-700">
        <div className="w-full max-w-md rounded-lg shadow-md p-6 bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">Edit Profile</h2>
          <form
            className="flex flex-wrap justify-between"
            action
            id="profileForm"
            onsubmit="return validateProfileForm()"
          >
            <div className="mb-4">
              <label className="font-bold block mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className="border w-full py-2 px-2 text-gray-700 shadow rounded"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
              />
              <span
                className="text-red-600 text-sm mt-2 text-wrap"
                id="firstNameError"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold block mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="border w-full py-2 px-2 text-gray-700 shadow rounded"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
              />
              <span
                className="text-red-600 text-sm mt-2 text-wrap"
                id="lastNameError"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold block mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="border w-full py-2 px-2 text-gray-700 shadow rounded"
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
              />
              <span
                className="text-red-600 text-sm mt-2 text-wrap"
                id="usernameError"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold block mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border w-full py-2 px-2 text-gray-700 shadow rounded"
                type="text"
                id="email"
                name="email"
                placeholder="Enter email address"
              />
              <span
                className="text-red-600 text-sm mt-2 text-wrap"
                id="emailError"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold block mb-2" htmlFor="phone">
                Mobile Number
              </label>
              <input
                className="border w-full py-2 px-2 text-gray-700 shadow rounded"
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter mobile number"
              />
              <span
                className="text-red-600 text-sm mt-2 text-wrap"
                id="phoneError"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold block mb-2" htmlFor="currentPassword">
                Old Password
              </label>
              <input
                className="border w-full py-2 px-2 text-gray-700 shadow rounded"
                type="text"
                id="currentPassword"
                name="currentPassword"
                placeholder="Enter your old password"
              />
              <span
                className="text-red-600 text-sm mt-2 text-wrap"
                id="currentPasswordError"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold block mb-2" htmlFor="newPassword">
                New Password
              </label>
              <input
                className="border w-full py-2 px-2 text-gray-700 shadow rounded"
                type="text"
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
              />
              <span
                className="text-red-600 text-sm mt-2 text-wrap"
                id="newPasswordError"
              />
            </div>
            <div className="mb-4">
              <label className="font-bold block mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="border w-full py-2 px-2 text-gray-700 shadow rounded"
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm new password"
              />
              <span
                className="text-red-600 text-sm mt-2 text-wrap"
                id="confirmPasswordError"
              />
            </div>
            <button
              type="submit"
              className="btn bg-blue-500 w-full text-white py-2 rounded hover:bg-blue-700"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;
