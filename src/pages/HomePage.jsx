// import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";

import user1 from "../images/user-1.png";
import user2 from "../images/user-2.png";
import user3 from "../images/user-3.png";
import "./HomePage.css";

const HomePage = () => {
  // const [username, setUsername] = useState("");

  // const handleSearch = () => {
  //   setUsername();
  // };

  return (
    <>
      <Navbar />
      <main>
        <form>
          <input
            type="text"
            // onChange={handleSearch}
            // value={username}
            placeholder="Search for Users"
            className="input--user-search"
          />
          <input
            type="text"
            placeholder="Location"
            className="input--user-location"
          />
        </form>
        <div className="usercards-container">
          <UserCard img={user1} name={"Eva Cho"} />
          <UserCard img={user2} name={"Helen Cho"} />
          <UserCard img={user3} name={"Megan Johnson"} />
        </div>
      </main>
    </>
  );
};

export default HomePage;
