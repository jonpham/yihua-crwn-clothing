import React, { PureComponent } from "react";

import FormInput from "../form-input";
import CustomButton from "../custom-button";

import {
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../auth/authUtils";

import "./SignIn.scss";

const DEFAULT_EMPTY_FORM_STATE = { email: "", password: "" };
class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...DEFAULT_EMPTY_FORM_STATE,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(email, password);
      this.setState({ ...DEFAULT_EMPTY_FORM_STATE });
    } catch (e) {
      console.error("Error logging in with Email/PW", e);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2 className="heading">I already have an account</h2>
        <span className="guidance">Sign in with your email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            type="email"
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            name="password"
            type="password"
            value={password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton buttonType="secondary" onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
