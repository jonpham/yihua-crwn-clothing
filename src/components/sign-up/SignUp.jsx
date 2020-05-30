import React, { PureComponent } from "react";

import FormInput from "../form-input";
import CustomButton from "../custom-button";

import "./SignUp.scss";
import { createUserWithEmailAndPassword } from "../../auth/authUtils";
import { createUserProfileDocument } from '../../db/entity-models/userProfile';

const DEFAULT_EMPTY_FORM = {
  confirmPassword: "",
  displayName: "",
  email: "",
  password: "",
};

class SignUp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...DEFAULT_EMPTY_FORM
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { confirmPassword, displayName, email, password } = this.state;

    // Create/Register User.
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
      this.setState({ ...DEFAULT_EMPTY_FORM });
    } catch(e) {
      console.error(e);
    }
  };

  render() {
    const { confirmPassword, displayName, email, password } = this.state;

    return (
      <div className="sign-up">
        <h2 className="heading">I do not have an account</h2>
        <span className="guidance">Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Display name"
            name="displayName"
            type="text"
            value={displayName}
            required
          />
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
          <FormInput
            handleChange={this.handleChange}
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Submit Form</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
