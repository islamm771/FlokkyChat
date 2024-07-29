import React from "react";
import "./select.css";
import { useDispatch } from "react-redux";
import {
	setSelectedAlumaniUniversity,
	setSelectedCollege,
} from "../../../app/feature/ListChatSlice";

const Select = ({ optionsArray, defaultValue, setValue, selectName, date }) => {
	const dispatch = useDispatch();

	const updateValue = (value) => {
		if (selectName === "university") {
			dispatch(setSelectedAlumaniUniversity({ university: value }));
		}
		if (selectName === "college") {
			dispatch(setSelectedCollege({ college: value }));
		}
	};
	return (
		<div class="form-item form-item-css">
			<div
				class="form-select form-select-css"
				style={{ display: `${date === "yes" ? "flex" : ""}` }}
			>
				{date === "yes" && (
					<svg
						class="form-input-icon icon-events"
						style={{ position: "absolute", top: "12px", left: "8px" }}
					>
						<use xlinkHref="#svg-events"></use>
					</svg>
				)}
				<select
					id="profile-privacy-friend-request"
					name="profile_privacy_friend_request"
					style={{ paddingLeft: `${date === "yes" ? "36px" : ""}` }}
					onChange={(e) => {
						console.log(e.target.value);
						setValue(e.target.value);
						updateValue(e.target.value);
					}}
				>
					{/* <option value="1" selected>
						Everyone (Public)
					</option>
					<option value="2">Friends of Friends</option>
					<option value="3">No One (Private)</option> */}
					{/* <option value="" disabled selected style={{ display: "none" }}> */}
					<option value="" disabled selected>
						{defaultValue}
					</option>
					{optionsArray.map((option) => (
						<option key={option.id} value={option.value}>
							{option.value}
						</option>
					))}
				</select>
				<svg class="form-select-icon icon-small-arrow">
					<use xlinkHref="#svg-small-arrow"></use>
				</svg>
			</div>
		</div>
	);
};

export default Select;
