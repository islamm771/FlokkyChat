import { useEffect, useState } from "react";
import "./input-field.css";

const InputField = ({ type, label, Icon }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        className={`form-control bg-transparent input-field`}
        type={type}
        name={type}
        autoComplete="off"
        id={type}
        onChange={(e) => handleChange(e)}
      />
      <label
        className={`${
          value.length > 0 ? "placeholder-field-only-top" : "placeholder-field"
        }`}
        htmlFor={type}
      >
        {label}
      </label>
      {/* input icon */}
      <span className="input-icon">
        <Icon />
      </span>
      {/* input icon */}
      {value.length < 5 && (
        <div className="fv-plugins-message-container error-msg">
          <span role="alert" style={{ color: "red" }}>
            {type === "email" ? "Email is required" : "Password is required"}
          </span>
        </div>
      )}
    </>
  );
};

export default InputField;
