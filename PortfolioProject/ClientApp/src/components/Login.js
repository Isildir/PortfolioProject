import React, { Component } from "react";
import ".././style/css/style.css";
import ".././style/css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false
    };
  }
  addActiveClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    return (
      <div className="login-page">
        <div className="backside">
          <div className="backside__form">
            <h2 className="form-header">Sign Up</h2>
            <form
              className="signup-form"
              method="post"
              onsubmit="return false;"
            >
              <div class="signup-form__username">
                <label for="username-signup" className="username-label">
                  Username
                </label>
                <input className="username-input" type="text" name="username" />
              </div>
              <div className="signup-form__password">
                <label for="password-signup" class="password-label">
                  Password
                </label>
                <input
                  className="password-input"
                  type="password"
                  name="password"
                />
              </div>
              <div class="form-element form-checkbox">
                <input
                  id="confirm-terms"
                  type="checkbox"
                  name="confirm"
                  value="yes"
                  className="checkbox"
                />
                <label for="confirm-terms">
                  I agree to the <a href="#">Terms of Service</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </label>
              </div>
              <button
                className="signup-form__button"
                type="submit"
                name="signup"
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="backside__text">
            <h1>
              Already
              <br /> have account?
            </h1>
            <p>
              Sign in
              <br />
              to check your favourite images
            </p>
            <button
              className="signup-button"
              type="submit"
              name="signup"
              onClick={this.addActiveClass}
            >
              Log in
            </button>
          </div>
        </div>

        <div className="frontside">
          <div
            className={
              this.state.active
                ? "frontside__form"
                : "frontside__form  frontside__form--shown"
            }
          >
            <h2 className="form-header">Login</h2>
            <form className="login-form" method="post" onSubmit="return false;">
              <div class="login-form__username">
                <label for="username-login" class="username-label">
                  Username
                </label>
                <input className="username-input" type="text" name="username" />
              </div>
              <div class="login-form__password">
                <label for="password-login" className="password-label">
                  Password
                </label>
                <input
                  className="password-login"
                  type="password"
                  name="password"
                />
              </div>
              <button className="login-form__button">Log In</button>
            </form>
          </div>
          <div
            className={
              this.state.active
                ? "frontside__text frontside__text--hidden"
                : "frontside__text"
            }
          >
            <h1>Dont have account?</h1>
            <p>
              Register
              <br />
              It is and always will be <span>for free</span>
            </p>
            <button
              className="signup-button"
              type="submit"
              name="signup"
              onClick={this.addActiveClass}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
