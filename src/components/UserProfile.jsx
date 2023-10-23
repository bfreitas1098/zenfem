import edit from "../images/edit.svg";
import InterestBtns from "./InterestBtns";

import "./UserProfile.css";

const UserProfile = (props) => {
  return (
    <aside>
      <div className="profile--info">
        <img src={props.profileImg} alt="A user" className="profile--img" />
        <p className="profile--user">
          {props.name}, {props.age}
        </p>
        <p className="profile--location">Pasadena, California</p>
        <button className="btn--edit-profile" style={props.display}>
          <img
            src={edit}
            alt="Icon of a paper on a pencil"
            className="icon--edit"
          />
          Edit Profile
        </button>
      </div>
      <div className="profile--bio">
        <h6>Bio</h6>
        <p>Making change to a small world</p>
      </div>
      <div className="profile--interests">
        <h6>Interests</h6>
        <div className="interests-btns">
          <InterestBtns interest={"Knitting"} />
          <InterestBtns interest={"Hiking"} />
          <InterestBtns interest={"Sports"} />
        </div>
      </div>
      <div className="profile--curious">
        <h6>Curious About</h6>
        <div className="interests-btns">
          <InterestBtns interest={"Nature"} />
          <InterestBtns interest={"Crafts"} />
          <InterestBtns interest={"Reading"} />
        </div>
      </div>
    </aside>
  );
};

export default UserProfile;
