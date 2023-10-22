import "./UserCard.css";
import add from "../images/add.svg";
import axios from 'axios';
import React, { useState, useEffect } from 'react';


// const UserCard = (props) => {
//   return (
//     <div className="user-card">
//       <div className="bio-container">
//         <img
//           src={props.img}
//           alt="A woman with earphones on that are connected to her phone that she is holding and looking happily in the distance in an autumnal setting"
//         />
//         <div className="name-connect-container">
//           <div className="name">
//             <p className="full-name">{props.name}</p>
//             <p className="location">Pasadena, California</p>
//           </div>
//           <button className="btn--connect">
//             <img src={add} alt="Plus icon" />
//             Connect
//           </button>
//         </div>
//       </div>
//       <div className="interests-container">
//         <h6>Interests</h6>
//         <div className="interests-btns">
//           <button>Sports</button>
//           <button>Nature</button>
//           <button>Knitting</button>
//         </div>
//       </div>
//       <div className="goal-container">
//         <h6>Current Goal</h6>
//         <p className="goal">Swimming on Long Island Beach</p>
//       </div>
//     </div>
//   );
// };

// export default UserCard;



const UserCard = (props) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/users/')
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          // Assuming you want to display the first user's data
          const firstUser = response.data[0];
          setUserData(firstUser);
        } else {
          console.error('No user data found in the response.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="user-card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="bio-container">
            <img
              src={props.img}
              alt="A woman with earphones on..."
            />
            <div className="name-connect-container">
              <div className="name">
                <p className="full-name">{userData.firstname} {userData.surname}</p>
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
              {userData.interests ? (
                JSON.parse(userData.interests.replace(/'/g, '"')).map((interest, index) => (
                  <button key={index}>{interest}</button>
                ))
              ) : (
                <p>No interests provided.</p>
              )}
            </div>
          </div>
          <div className="goal-container">
            <h6>Current Goal</h6>
            <p className="goal"></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;