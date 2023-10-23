import "./UserCard.css";
import add from "../images/add.svg";

import { Link } from "react-router-dom";
import InterestBtns from "./InterestBtns";

const UserCard = (props) => {
  return (
    <div className="user-card">
      <div className="bio-container">
        <img src={props.img} alt="A user" />
        <div className="name-connect-container">
          <div className="profile-info">
            <p className="user-info">
              {props.name}, {props.age}
            </p>
            <div className="location-container">
              <p className="location">Pasadena, California</p>
              <p className="distance">{props.distance}</p>
            </div>
          </div>
          <Link to={props.profile} className="connect-link">
            <button className="btn--connect">
              <img src={add} alt="Plus icon" />
              Connect
            </button>
          </Link>
        </div>
      </div>
      <div className="interests-container">
        <h6>Interests</h6>
        <div className="interests-btns">
          <InterestBtns interest={"Sports"} />
          <InterestBtns interest={"Nature"} />
          <InterestBtns interest={"Knitting"} />
        </div>
      </div>
      <div className="goal-container">
        <h6>Current Goal</h6>
        <p className="goal">Swimming on Long Island Beach</p>
      </div>
    </div>
  );
};

export default UserCard;