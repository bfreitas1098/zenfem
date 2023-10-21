import "./UserCard.css";
import add from "../images/add.svg";

const UserCard = (props) => {
  return (
    <div className="user-card">
      <div className="bio-container">
        <img
          src={props.img}
          alt="A woman with earphones on that are connected to her phone that she is holding and looking happily in the distance in an autumnal setting"
        />
        <div className="name-connect-container">
          <div className="name">
            <p className="full-name">{props.name}</p>
            <p className="location">Pasadena, California</p>
          </div>
          <button className="btn--connect">
            <img src={add} alt="Plus icon" />
            Connect
          </button>
        </div>
      </div>
      <div className="interests-container">
        <h6>Interests</h6>
        <div className="interests-btns">
          <button>Sports</button>
          <button>Nature</button>
          <button>Knitting</button>
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
