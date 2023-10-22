import "./UserPin.css";

import pin from "../images/user-pin.svg";

const UserPin = (props) => {
  return (
    <div className="user-pin-container">
      <div>
        <img src={props.user} alt="A user" className="user-img" />
        <img src={pin} alt="Icon of a map pin" className="icon--user-pin" />
      </div>
      <span className="user-goal">Swimming on Long Island Beach</span>
    </div>
  );
};

export default UserPin;
