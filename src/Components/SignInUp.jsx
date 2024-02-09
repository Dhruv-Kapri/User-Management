import React from "react";
import "./signInUp.css";
import { Button } from "./Button";

const SignInUp = () => {
  return (
    <div className="signinup-container">
      <div className="signinup-form">
        <form>
          <h3>Login</h3>
          <div className="logos">
            <i>google</i>
            <i>microsoft</i>
          </div>
          ------------- or Login in with Email -------------
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
            <a href="">Forgot Password?</a>
          </div>
          <div className="form-group">
            <Button primary={true} type={"submit"} label="Login" />
          </div>
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>

      <div className="signinup-content">
        <div className="signinup-logo">
          {/* Your logo goes here */}
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="signinup-text">
          <h1>New here ?</h1>
          <h2>Welcome to Kendra Sustain!</h2>
          <p>
            Enabling Organizations to Embed Data-driven Sustainability
            Decision-Making across business operations
          </p>
          <p>Entry your personal details and start Journey with us</p>
          <Button label="Signup"></Button>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
