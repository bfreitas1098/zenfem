import shell from "./shell-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src={shell} alt="Shell logo" className="shell-logo" />
        <h4>zenfem</h4>
      </div>
    </header>
  );
};

export default Navbar;
