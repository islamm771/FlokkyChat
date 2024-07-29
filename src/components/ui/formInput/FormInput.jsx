import React, { useState } from "react";
import Email from "../../../assests/inputsIcon/email.svg";
import Password from "../../../assests/inputsIcon/password.svg";
import Username from "../../../assests/inputsIcon/username.svg";
import Company from "../../../assests/icons/company.svg";
// import Calender from "../../../assests/calender/calender.svg";
import "./formInput.css";

const FormInput = ({ label, name, icon, type, setValue, value, ...rest }) => {
	const [focused, setFocused] = useState(false);

	const handleFocus = () => {
		setFocused(true);
		console.log(focused);
	};

	const handleBlur = (e) => {
		if (!e.target.value) {
			setFocused(false);
		}
	};

	return (
		<div className="form-row">
			<div className="form-item form-item-css">
				<div
					className={`form-input 
				${focused ? "active" : value !== "" && value ? "active" : ""} 
					${icon ? "inputForm" : ""}`}
				>
					{icon === "email" && <img src={Email} alt="email" />}
					{icon === "username" && <img src={Username} alt="username" />}
					{icon === "password" && <img src={Password} alt="password" />}
					{icon === "company" && <img src={Company} alt="company" />}
					{icon === "date" && (
						<svg class="form-input-icon icon-events calender-svg">
							<use xlinkHref="#svg-events"></use>
						</svg>
					)}
					<label htmlFor={name}>{label}</label>
					<input
						{...rest}
						type={type}
						required={type === "date" ? true : false}
						onFocus={handleFocus}
						onBlur={handleBlur}
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default FormInput;
