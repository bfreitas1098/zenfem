// import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";

import search from "../images/search.svg";
import marker from "../images/marker.svg";
import user1 from "../images/user-1.png";
import user2 from "../images/user-2.png";
import user3 from "../images/user-3.png";
import map from "../images/map.png";
import "./HomePage.css";
import UserPin from "../components/UserPin";

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
          <img
            src={search}
            alt="Icon of a magnifying glass"
            className="icon--search"
          />
          <input
            type="text"
            placeholder="Location"
            className="input--user-location"
          />
          <img
            src={marker}
            alt="Icon of a map marker"
            className="icon--marker"
          />
        </form>
        <div className="user-map-container">
          <div className="usercards-container">
            <UserCard
              img={user1}
              name={"Eva Cho"}
              age={25}
              distance={"0.1 mi"}
            />
            <UserCard
              img={user2}
              name={"Helen Cho"}
              age={31}
              distance={"0.2 mi"}
            />
            <UserCard
              img={user3}
              name={"Megan Johnson"}
              age={29}
              distance={"0.4 mi"}
            />
          </div>
          <div className="map-container">
            <img src={map} alt="A zoomed in map of New York" className="map" />
            <div className="user-pin--1">
              <UserPin user={user1} />
            </div>
            <div className="user-pin--2">
              <UserPin user={user2} />
            </div>
            <div className="user-pin--3">
              <UserPin user={user3} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
