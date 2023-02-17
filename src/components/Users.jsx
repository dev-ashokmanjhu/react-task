import React from "react";

const Users = ({ usersData, setUsersData }) => {
  const deleteUserHandler = (userId) => {
    const updatedUsers = usersData.filter((user) => user.id !== userId);
    setUsersData(updatedUsers);
  };

  if (!usersData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <h1>FargoWiz Task</h1>
      <div className="users">
        <ul>
          {usersData.map((data, i) => (
            <li key={data.id}>
              <h3>{data.name}</h3>
              <h5>{data.email}</h5>
              <h6>{data.phone}</h6>
              <button
                className="button"
                onClick={() => deleteUserHandler(data.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
