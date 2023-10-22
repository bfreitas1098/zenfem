import calendar from "../images/calendar.svg";
import marker from "../images/marker.svg";
import check from "../images/check.svg";

import "./Goal.css";

const Goal = (props) => {
  return (
    <div className="goal--container">
      <img src={props.img} alt={props.goal} className="goal--img" />
      <div className="goal--content">
        <div className="goal--description">
          <h6>{props.goal}</h6>
          <div className="goal--information">
            <span>{props.name}</span>
            <div className="ellipse"></div>
            <span className="goal-date">
              <img
                src={calendar}
                alt="Icon of a calendar"
                className="icon--calendar"
              />
              {props.date}
            </span>
            <div className="ellipse"></div>
            <span className="goal-location">
              <img
                src={marker}
                alt="Icon of a map marker"
                className="icon--location"
              />
              {props.location}
            </span>
          </div>
        </div>
        <div className="goal--bottom">
          <p className="goal--users">{props.users} zenfems joined goal</p>
          <button className="btn--complete-goal">
            <img
              src={check}
              alt="Icon of a checkmark"
              className="icon--checkmark"
            />
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goal;
