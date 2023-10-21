import React, { useState } from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [username, setUsername] = useState("");

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
      </main>
    </>
  );
};

export default HomePage;
