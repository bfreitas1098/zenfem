import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import goal1 from "../images/goal-1.png";
import goal2 from "../images/goal-2.png";
import goal3 from "../images/goal-3.jpeg";
import goal4 from "../images/goal-4.jpeg";
import user1 from "../images/user-3.png";
import user2 from "../images/user-1.png";
import map from "../images/map.png";

import "./OtherProfile.css";
import { Link } from "react-router-dom";
import Goal from "../components/Goal";
import UserPin from "../components/UserPin";

const OtherProfile3 = () => {
  return (
    <div className="profile--page">
      <Navbar />
      <div className="profile">
        <UserProfile
          profileImg={user1}
          name={"Megan Johnson"}
          age={29}
          display={{ display: "none" }}
        />
        <div className="profile-main">
          <Link to={"/Home"}>
            <button className="btn--back">Back to Map</button>
          </Link>
          <div className="map-container">
            <img src={map} alt="Map of an area" className="profile-map" />
            <div className="pin">
              <UserPin user={user2} goal={"Knitting a Scarf with the girls"} />
            </div>
          </div>
          <div className="tabs-container">
            <span className="tab active">Current Goal(s)</span>
            <span className="tab">Shared Goal(s)</span>
            <span className="tab">Past Goal(s)</span>
          </div>
          <div className="goals-container">
            <Goal
              img={goal1}
              goal={"Book Discussion in the BK Library"}
              name={"Eva Cho"}
              date={"Tue, Nov 12th"}
              location={"Casadena, California"}
              users={4}
            />
            <Goal
              img={goal3}
              goal={"Knitting a Scarf with the girls"}
              name={"Eva Cho"}
              date={"Tue, Nov 12th"}
              location={"Casadena, California"}
              users={2}
            />
            <Goal
              img={goal4}
              goal={"Networking with Entrepreneurs"}
              name={"Eva Cho"}
              date={"Tue, Nov 12th"}
              location={"Casadena, California"}
              users={2}
            />
            <Goal
              img={goal2}
              goal={"Morning Hikes Along the Rose Bowl Loop Track"}
              name={"Eva Cho"}
              date={"Tue, Nov 12th"}
              location={"Casadena, California"}
              users={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile3;
