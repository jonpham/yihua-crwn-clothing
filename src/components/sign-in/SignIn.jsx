import React, { PureComponent } from "react";

import FormInput from "../form-input";
import CustomButton from "../custom-button";

import { signInWithGoogle } from "../../auth/authUtils";

import "./SignIn.scss";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="heading">I already have an account</h2>
        <span className="guidance">Sign in with your email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="password"
            name="password"
            type="password"
            value={this.state.password}
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
