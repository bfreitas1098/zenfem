import shell from "../images/shell-logo.svg";
import house from "../images/home.svg";
import chat from "../images/comments.svg";
import user from "../images/user.svg";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to={"/"} className="logo">
        <img src={shell} alt="Shell logo" className="logo-img" />
        <h4>zenfem</h4>
      </Link>
      <div className="btns">
        <button>
          <Link to={"/"}>
            <img src={house} alt="Icon of a house" className="btn--icon" />
          </Link>
        </button>
        <button>
          <a href="/">
            <img src={chat} alt="Icon of chat bubbles" className="btn--icon" />
          </a>
        </button>
        <button>
          <Link to={"/CurrentProfile"}>
            <img src={user} alt="Icon of a person" className="btn--icon" />
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
