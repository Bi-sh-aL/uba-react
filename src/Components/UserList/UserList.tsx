

function UserList() {
  return (
    <div className="container min-h-screen flex items-center justify-center mx-auto p-4 bg-gray-700">
      
      <div className="overflow-x-auto">
      <h2 className="text-4xl font-bold mb-5 text-center block text-white">User Listing</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">First Name</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Last Name</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Phone No.</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4 whitespace-nowrap" data-label="First Name">Bishal</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Last Name">Shrestha</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Username">bishal</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Email">bsal.123@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Phone No.">9818326547</td>
              <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 whitespace-nowrap" data-label="First Name">Kumar</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Last Name">Karki</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Username">karkikumar</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Email">karki.kumar@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Phone No.">9876543210</td>
              <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 whitespace-nowrap" data-label="First Name">Ram</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Last Name">Basnet</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Username">rbasnet</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Email">basnet.4456@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Phone No.">9841000222</td>
              <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 whitespace-nowrap" data-label="First Name">Ashol</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Last Name">Karki</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Username">karki2624</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Email">karkiashol473r@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap" data-label="Phone No.">9808369158</td>
              <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
