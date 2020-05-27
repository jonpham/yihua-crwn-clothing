import React, { memo } from "react";

import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherFormInputProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherFormInputProps}
    />
    {label ? (
      <label
        className={`${
          otherFormInputProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default memo(FormInput);
