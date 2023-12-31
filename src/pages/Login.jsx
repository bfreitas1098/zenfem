import logo from "../images/shell-logo.svg";
import login from "../images/login.png";
import line from "../images/line.svg";
import "./Login.css";
import { Link } from "react-router-dom";
import "@passageidentity/passage-elements/passage-auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="login--container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="login--form-container">
        <div className="login--logo-container">
          <h1>zenfem</h1>
          <img src={logo} alt="zenfem logo" className="login--logo" />
        </div>
        <h6>Login</h6>
        <form className="login--form">
          <div className="login--email-input">
            <label>Email Address</label>
            <input type="email" />
          </div>
          <div className="login--password-input">
            <label>Password</label>
            <input type="password" />
          </div>
          <Link to={"/Home"} className="btn--login">
            Login
          </Link>
        </form>
        <span className="login--divider">
          <img src={line} alt="Icon of a line" />
          or
          <img src={line} alt="Icon of a line" />
        </span>
        {/* Sign In with Passkey */}
        <div className="login--passkey">
          <passage-auth app-id="uhW8zFCtIVRFm01hxvhC3Dvg"></passage-auth>
          <script src="https://psg.so/web.js"></script>
        </div>
        <div className="login--register">
          Don't have an account?<span>Sign Up!</span>
        </div>
      </div>
      <img
        src={login}
        alt="Four women in white dresses hugging each other from behind"
        className="login--img"
      />
    </div>
  );
};

export default Login;
