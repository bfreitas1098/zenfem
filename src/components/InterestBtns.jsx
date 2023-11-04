import React from "react";
import "./InterestBtns.css";


import "./InterestBtns.css";

const InterestBtns = (props) => {
  return (
    <>
      <button className="interest">{props.interest}</button>
    </>
  );
};

export default InterestBtns;

// const InterestBtns = (props) => {
//   return (
//     <div className="interests-btns">
//       {props.interests ? (
//         JSON.parse(props.interests.replace(/'/g, '"')).map((interest, index) => (
//           <button key={index}>{interest}</button>
//         ))
//       ) : (
//         <p>No interests provided.</p>
//       )}
//     </div>
//   );
// };

// export default InterestBtns;
