import React, { Component } from "react";
import ".././style/css/style.css";

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="backside">
          <div className="backside__right">
            <h2>Sign Up</h2>
            <form
              className="signup-form"
              method="post"
              onsubmit="return false;"
            >
              <div class="signup-form__username">
                <label for="username-signup" class="username-label">
                  Username
                </label>
                <input className="username-input" type="text" name="username" />
              </div>
              <div class="signup-form__password">
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
                  class="checkbox"
                />
                <label for="confirm-terms">
                  I agree to the <a href="#">Terms of Service</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </label>
              </div>
              <div class="signup-form__button">
                <button className="signup-button" type="submit" name="signup">
                  Sign up
                </button>
                <button className="login-button">Log In</button>
              </div>
            </form>
          </div>
          <div className="backside__left">
            <h2>Login</h2>
            <form className="login-form" method="post" onsubmit="return false;">
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
              <div class="login-form__button">
                <button className="login-button">Log In</button>
              </div>
            </form>
          </div>
        </div>

        <div className="frontside">
          <div className="frontside__left" />
          <div className="frontside__right">
            <h1>Dont have account?</h1>
            <p>
              Register
              <br />
              It is and always will be <span>for free</span>
            </p>
            <button className="signup-button" type="submit" name="signup">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
