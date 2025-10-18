import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../auth/useAuth";
import banner from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";

import "./Auth.scss";

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/dashboard", { replace: true });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="left">
        <div className="left-sub-wrapper">
          <img src={logo} alt="logo" className="logo" />
          <img src={banner} alt="Sign in banner" />
        </div>
      </div>
      <div className="right">
        <div className="right-wrapper">
          <div className="right-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="header-wrapper">
            <h1 className="header">Welcome!</h1>
            <p className="sub-header">Enter details of login</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              placeholder="Email"
              className="field"
            />

            <input
              className="field"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="forgot-password">Forgot password?</p>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" className="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
