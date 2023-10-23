import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import signOut from "../images/sign-out.svg";
import notebook from "../images/notebook.svg";
import edit from "../images/edit-2.svg";
import goal1 from "../images/goal-1.png";
import goal2 from "../images/goal-2.png";
import goal3 from "../images/goal-3.jpeg";
import goal4 from "../images/goal-4.jpeg";
import user from "../images/user-4.png";

import "./CurrentProfile.css";
import Goal from "../components/Goal";
import { Link } from "react-router-dom";

const CurrentProfile = () => {
  return (
    <div className="profile--page">
      <Navbar />
      <div className="profile">
        <UserProfile profileImg={user} name={"Evelyn Mill"} age={28} />
        <div className="profile-main">
          <div className="btns-container">
            <Link to={"/"} className="login-link">
              <button className="btn--sign-out">
                <img
                  src={signOut}
                  alt="Icon of a door and an arrow"
                  className="icon--sign-out"
                />
                Sign Out
              </button>
            </Link>
            <div className="goal-btns">
              <button className="btn--create-goal">
                <img
                  src={notebook}
                  alt="Icon of a notebook pad"
                  className="icon--create-goal"
                />
                Create a Goal
              </button>
              <button className="btn--edit-goal">
                <img
                  src={edit}
                  alt="An icon of a paintbrush and a paper"
                  className="icon--edit-goal"
                />
                Edit an Existing Goal
              </button>
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

export default CurrentProfile;
