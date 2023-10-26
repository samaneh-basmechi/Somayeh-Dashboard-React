import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:80/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto">
      <table className="table-auto">
        <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="border px-4 py-2">{user.id}</td>
            <td className="border px-4 py-2">{user.name}</td>
            <td className="border px-4 py-2">{user.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
