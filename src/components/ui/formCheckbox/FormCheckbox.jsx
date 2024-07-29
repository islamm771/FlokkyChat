import React from "react";
import "./form-checkbox.css";
import { Link } from "react-router-dom";

const FormCheckbox = ({ label, isChecked, setIsChecked, id, name }) => {
	// const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked((prev) => !prev);
	};
	return (
		// <label className="custom-checkbox-label">
		// 	<input
		// 		type="checkbox"
		// 		className="custom-checkbox-input"
		// 		checked={isChecked}
		// 		onChange={handleCheckboxChange}
		// 	/>
		// 	<span className="custom-checkbox-checkmark"></span>
		// 	{label}
		// </label>
		<div class="form-item">
			{/* <!-- CHECKBOX WRAP --> */}
			<div class="checkbox-wrap">
				<input
					type="checkbox"
					id={id}
					name={name}
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
				{/* <!-- CHECKBOX BOX --> */}
				<div class="checkbox-box">
					{/* <!-- ICON CROSS --> */}
					<svg class="icon-cross">
						<use xlinkHref="#svg-cross"></use>
					</svg>
					{/* <!-- /ICON CROSS --> */}
				</div>
				{/* <!-- /CHECKBOX BOX --> */}
				{label === "Agree" && (
					<label for={id} style={{ fontWeight: 400 }}>
						By creating your account, you agree to our{" "}
						<Link to="#" className="links-bottom">
							Terms of Use
						</Link>{" "}
						&{" "}
						<Link to="#" className="links-bottom">
							Privacy Policy
						</Link>
					</label>
				)}
				{label !== "Agree" && <label for={id}>{label}</label>}
			</div>
			{/* <!-- /CHECKBOX WRAP --> */}
		</div>
	);
};

export default FormCheckbox;
