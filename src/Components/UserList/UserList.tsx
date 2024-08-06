import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState<{ id: number, firstName: string, lastName: string, username: string, email: string, mobileNumber: string, role: {
    map: any;name: string
}}[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get('http://localhost:8080/users',{ 
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            page, 
            limit
          }
        });

        setUsers(response.data.data || []);
        setTotalPages(response.data.totalPages)
        
      } catch (error) {
        setError("Failed to fetch users");
        console.error(error);
      } 
    }

    fetchUsers()
  }, [page]);

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8080/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`  
        }
      });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

 
  if (error) return <div>{error}</div>;

  return (
    <div className=" min-h-screen flex items-center justify-center mx-auto p-4 bg-gray-700">
      
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
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap" data-label="First Name">{user.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap" data-label="Last Name">{user.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap" data-label="Username">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap" data-label="Email">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap" data-label="Phone No.">{user.mobileNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap" data-label="Role">
                  {user.role.map((role: { name: string; }) => role.name).join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button> */}
                  <button
                    onClick={() => handleDelete(user.id)} 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
        +
        <div className="flex align-items-center justify-center mt-2 space-x-10">
        <button
          className= "bg-gray-500 text-white py-2 px-4 rounded"
          disabled= {page === 1}
          onClick={() => setPage(prevPage => prevPage - 1)}
        >
          Previous
        </button>
        <span className="text-white">Page {page} of {totalPages}</span>
        <button
          className= "bg-gray-500 text-white py-2 px-4 rounded"
          disabled= {page === totalPages}
          onClick={() => setPage(prevPage => prevPage + 1)}
        >
          Next
        </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
