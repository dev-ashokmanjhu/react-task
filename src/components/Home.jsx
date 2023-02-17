import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./Users";

const Home = () => {
  const [UsersData, setUsersData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => response.data)
      .then((json) => setUsersData(json))
      .catch((err) => console.log(err));
  }, []);

  if (!UsersData) {
    return <div>Loading...</div>;
  }
  // console.log(Users[0].name);
  return <Users usersData={UsersData} setUsersData={setUsersData} />;
};

export default Home;
