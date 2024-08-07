import React, { useState } from "react";
import Email from "../../../assests/inputsIcon/email.svg";
import Password from "../../../assests/inputsIcon/password.svg";
import Username from "../../../assests/inputsIcon/username.svg";
import Company from "../../../assests/icons/company.svg";
// import Calender from "../../../assests/calender/calender.svg";
import "./formTextBox.css";

const FormTextBox = ({
	label,
	name,
	setValue,
	value,
	noMT = false,
	...rest
}) => {
	const [focused, setFocused] = useState(false);

	const handleFocus = () => {
		setFocused(true);
		// console.log(focused);
	};

	const handleBlur = (e) => {
		if (!e.target.value) {
			setFocused(false);
		}
	};

	return (
		<div className={`form-row ${noMT ? "!mt-0" : ""}`}>
			<div className="form-item form-item-css">
				<div
					className={`form-textbox ${focused ? "active" : value !== "" && value ? "active" : ""}`}
				>
					<label htmlFor={name}>{label}</label>
					<textarea 
					{...rest}
					name={name} id=""
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={value}
						onChange={(e) => {
							setValue(e.target.value);
						}}
					rows={1}
					>

					</textarea>
				</div>
			</div>
		</div>
	);
};

export default FormTextBox;
