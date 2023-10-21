import shell from "../images/shell-logo.svg";
import house from "../images/home.svg";
import chat from "../images/comments.svg";
import user from "../images/user.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src={shell} alt="Shell logo" className="logo-img" />
        <h4>zenfem</h4>
      </div>
      <div className="btns">
        <button>
          <a href="/">
            <img src={house} alt="Icon of a house" className="btn--icon" />
          </a>
        </button>
        <button>
          <a href="/">
            <img src={chat} alt="Icon of chat bubbles" className="btn--icon" />
          </a>
        </button>
        <button>
          <a href="/">
            <img src={user} alt="Icon of a person" className="btn--icon" />
          </a>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
