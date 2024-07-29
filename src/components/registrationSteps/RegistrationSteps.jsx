import React, { useState } from "react";
import "./registration-steps.css";
// import SelectInput from "../ui/selectInput/SelectInput";
import FormInput from "../ui/formInput/FormInput";
import Modal from "../ui/modal/modal";
import verify from "../../assests/verifyImage/verify.svg";
import close from "../../assests/verifyImage/close.svg";
import Logo from "../../assests/logo/verify-logo.svg";
// import Upload from "../../assests/icons/upload-photo.svg";
import Select from "../ui/select/Select";
import ReCaptchaV2 from "react-google-recaptcha";
import FormCheckbox from "../ui/formCheckbox/FormCheckbox";
import ProgressBar from "@ramonak/react-progress-bar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Company from "../../assests/icons/company.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEarthAfrica, FaLocationDot } from "react-icons/fa6";
import { setIsExpat } from "../../app/feature/authSlice";
import OTP from "antd/es/input/OTP";

const countries = [
	{ id: 1, value: "Egypt" },
	{ id: 2, value: "United Arab Emirates" },
	{ id: 3, value: "Bahrain" },
	{ id: 4, value: "Saudi" },
];

const cities = [
	{ id: 1, value: "Cairo" },
	{ id: 2, value: "Giza" },
	{ id: 3, value: "Aswan" },
	{ id: 4, value: "Luxor" },
];

const gender = [
	{ id: 1, value: "Male" },
	{ id: 2, value: "Female" },
];

const maritalStatus = [
	{ id: 1, value: "Married" },
	{ id: 2, value: "Single" },
	{ id: 3, value: "Widowed" },
	{ id: 4, value: "Divorced" },
	{ id: 5, value: "Separated" },
];

const industries = [
	{
		name: "Arts",
		icon: Company,
	},
	{
		name: "Wellness Fitness",
		icon: Company,
	},
	{
		name: "Hospitality",
		icon: Company,
	},
	{
		name: "Transportation Logistics",
		icon: Company,
	},
	{
		name: "Tourism Travel",
		icon: Company,
	},
	{
		name: "Retail",
		icon: Company,
	},
	{
		name: "Software IT Services",
		icon: Company,
	},
	{
		name: "Entertainment",
		icon: Company,
	},
	{
		name: "Hardware Networking",
		icon: Company,
	},
	{
		name: "Health Care",
		icon: Company,
	},
	{
		name: "Manufacturing",
		icon: Company,
	},
	{
		name: "Media Communications",
		icon: Company,
	},
	{
		name: "Nonprofit",
		icon: Company,
	},
	{
		name: "Public Administration",
		icon: Company,
	},
	{
		name: "Public Safety",
		icon: Company,
	},
	{
		name: "Real Estate",
		icon: Company,
	},
	{
		name: "Design",
		icon: Company,
	},
	{
		name: "Education",
		icon: Company,
	},
	{
		name: "Finance",
		icon: Company,
	},
	{
		name: "Legal",
		icon: Company,
	},
	{
		name: "Agriculture",
		icon: Company,
	},
	{
		name: "Construction",
		icon: Company,
	},
	{
		name: "Consumer Goods",
		icon: Company,
	},
	{
		name: "Corporate Services",
		icon: Company,
	},
	{
		name: "Energy Mining",
		icon: Company,
	},
];

const yearsArray = [
	{ value: 1920 },
	{ value: 1921 },
	{ value: 1922 },
	{ value: 1923 },
	{ value: 1924 },
	{ value: 1925 },
	{ value: 1926 },
	{ value: 1927 },
	{ value: 1928 },
	{ value: 1929 },
	{ value: 1930 },
	{ value: 1931 },
	{ value: 1932 },
	{ value: 1933 },
	{ value: 1934 },
	{ value: 1935 },
	{ value: 1936 },
	{ value: 1937 },
	{ value: 1938 },
	{ value: 1939 },
	{ value: 1940 },
	{ value: 1941 },
	{ value: 1942 },
	{ value: 1943 },
	{ value: 1944 },
	{ value: 1945 },
	{ value: 1946 },
	{ value: 1947 },
	{ value: 1948 },
	{ value: 1949 },
	{ value: 1950 },
	{ value: 1951 },
	{ value: 1952 },
	{ value: 1953 },
	{ value: 1954 },
	{ value: 1955 },
	{ value: 1956 },
	{ value: 1957 },
	{ value: 1958 },
	{ value: 1959 },
	{ value: 1960 },
	{ value: 1961 },
	{ value: 1962 },
	{ value: 1963 },
	{ value: 1964 },
	{ value: 1965 },
	{ value: 1966 },
	{ value: 1967 },
	{ value: 1968 },
	{ value: 1969 },
	{ value: 1970 },
	{ value: 1971 },
	{ value: 1972 },
	{ value: 1973 },
	{ value: 1974 },
	{ value: 1975 },
	{ value: 1976 },
	{ value: 1977 },
	{ value: 1978 },
	{ value: 1979 },
	{ value: 1980 },
	{ value: 1981 },
	{ value: 1982 },
	{ value: 1983 },
	{ value: 1984 },
	{ value: 1985 },
	{ value: 1986 },
	{ value: 1987 },
	{ value: 1988 },
	{ value: 1989 },
	{ value: 1990 },
	{ value: 1991 },
	{ value: 1992 },
	{ value: 1993 },
	{ value: 1994 },
	{ value: 1995 },
	{ value: 1996 },
	{ value: 1997 },
	{ value: 1998 },
	{ value: 1999 },
	{ value: 2000 },
	{ value: 2001 },
	{ value: 2002 },
	{ value: 2003 },
	{ value: 2004 },
	{ value: 2005 },
	{ value: 2006 },
	{ value: 2007 },
	{ value: 2008 },
	{ value: 2009 },
	{ value: 2010 },
	{ value: 2011 },
	{ value: 2012 },
	{ value: 2013 },
	{ value: 2014 },
	{ value: 2015 },
	{ value: 2016 },
	{ value: 2017 },
	{ value: 2018 },
	{ value: 2019 },
	{ value: 2020 },
	{ value: 2021 },
	{ value: 2022 },
	{ value: 2023 },
	{ value: 2024 },
	{ value: 2025 },
	{ value: 2026 },
	{ value: 2027 },
	{ value: 2028 },
	{ value: 2029 },
	{ value: 2030 },
	{ value: 2031 },
	{ value: 2032 },
	{ value: 2033 },
	{ value: 2034 },
	{ value: 2035 },
	{ value: 2036 },
	{ value: 2037 },
	{ value: 2038 },
	{ value: 2039 },
	{ value: 2040 },
	{ value: 2041 },
	{ value: 2042 },
	{ value: 2043 },
	{ value: 2044 },
	{ value: 2045 },
	{ value: 2046 },
	{ value: 2047 },
	{ value: 2048 },
	{ value: 2049 },
	{ value: 2050 },
	{ value: 2051 },
	{ value: 2052 },
	{ value: 2053 },
	{ value: 2054 },
	{ value: 2055 },
	{ value: 2056 },
	{ value: 2057 },
	{ value: 2058 },
	{ value: 2059 },
	{ value: 2060 },
];

const isGraduated = [{ value: "Yes" }, { value: "No" }];

export const RegisterStepZero = ({ setCurrentStep }) => {
	const dispatch = useDispatch();
	return (
		<div className="step-zero-container">
			<div
				className="not-expat-user"
				onClick={() => {
					dispatch(setIsExpat({ value: false }));
					setCurrentStep(1);
				}}
			>
				<p className="expat-option-title">JOIN MY INSTITUTE COMMUNITY</p>
				<FaLocationDot className="expat-page-icons" size={24} />
				<p className="expat-option-desc">
					Choose this if you would like to connect with alumni, students, and
					staff within your institute. You will also be able to join expat
					communities.
				</p>
			</div>
			<div
				className="expat-user"
				onClick={() => {
					dispatch(setIsExpat({ value: true }));
					setCurrentStep(1);
				}}
			>
				<p className="expat-option-title">JOIN EXPAT COMMUNITIES</p>
				<FaEarthAfrica className="expat-page-icons" size={24} />
				<p className="expat-option-desc">
					Choose this if you would like to connect with other expats living in
					your country of residence.
				</p>
			</div>
		</div>
	);
};

export const RegisterStepOne = ({
	setCurrentStep,
	setSelectedUniversity,
	setSelectedCollege,
}) => {
	const isExpat = useSelector((state) => state.auth.isExpat);
	return (
		<div className="stepOne-container">
			<p className="step-one-title">
				{isExpat ? "1. Expat Details" : "1. Affiliation Details"}
			</p>
			{!isExpat && (
				<span className="step-one-subtitle">
					Choose your University Country and Details
				</span>
			)}
			<form>
				{/* <SelectInput optionsArray={countries} defaultValue="Select Country*" />
				<SelectInput optionsArray={cities} defaultValue="Select City*" />
				<SelectInput
					optionsArray={cities}
					defaultValue="Select Your Alumni University*"
				/>
				<p className="note">You will not be able to change this.</p>
				<SelectInput optionsArray={cities} defaultValue="Select Faculty*" /> */}

				<Select optionsArray={countries} defaultValue="Select Country*" />
				<Select optionsArray={cities} defaultValue="Select City*" />
				{!isExpat && (
					<Select
						optionsArray={cities}
						defaultValue="Select Your Alumni University*"
						setValue={setSelectedUniversity}
						selectName="university"
					/>
				)}
				{isExpat && (
					<Select optionsArray={countries} defaultValue="Nationality*" />
				)}
				<p className="note">You will not be able to change this.</p>
				<Select
					optionsArray={cities}
					defaultValue="Select Faculty*"
					setValue={setSelectedCollege}
					selectName="college"
				/>
				<button
					className="button medium secondary loginButton"
					onClick={(e) => {
						e.preventDefault();
						setCurrentStep(2);
						console.log(1);
					}}
				>
					Continue!
				</button>
			</form>
		</div>
	);
	// return (
	// 	<div className="step-five-container">
	// 		<p>1. Add your details</p>
	// 		<span>Tell us about you for a better networking experience.</span>
	// 		<form className="stepFourPartTwoForm">
	// 			<FormInput
	// 				label="First Name"
	// 				type={"text"}
	// 				id="first_name"
	// 				name="first-name"
	// 				icon={"username"}
	// 			/>
	// 			<div style={{ marginTop: "15px" }}>
	// 				<FormInput
	// 					label="Last Name"
	// 					type={"text"}
	// 					id="last_name"
	// 					name="last-name"
	// 					icon={"username"}
	// 				/>
	// 			</div>
	// 			<div style={{ marginTop: "15px" }}>
	// 				<FormInput
	// 					label="Phone Number"
	// 					type={"text"}
	// 					id="phone_number"
	// 					name="phone-number"
	// 					icon={"username"}
	// 				/>
	// 			</div>
	// 			<Select optionsArray={countries} defaultValue="Country of Residence*" />
	// 			<Select optionsArray={countries} defaultValue="City*" />
	// 			<Select optionsArray={countries} defaultValue="Nationality*" />
	// 			<button
	// 				className="button medium secondary"
	// 				onClick={(e) => {
	// 					e.preventDefault();
	// 					setCurrentStep(2);
	// 				}}
	// 			>
	// 				Save & Continue
	// 			</button>
	// 		</form>
	// 	</div>
	// );
};

export const SMSModal = ({ setIsSmsModalHide }) => {
	return (
		<Modal>
			<div className="verify-modal">
				<div
					className="close"
					onClick={() => {
						setIsSmsModalHide(true);
					}}
				>
					<img src={close} alt="Close" />
				</div>
				<div className="logo-modal">
					<img src={Logo} alt="Logo" />
				</div>
				<div className="modal-content">
					<img src={verify} alt="Verify" />
					<h2>SMS Code Sent!</h2>
					<p className="desc">
						Check your SMS Messages to activate your account to complete your
						registration and engage your community.
					</p>
					<span>Check SMS Messages</span>
					<p className="verify-note">
						Please check your SMS Messages if the message is not in your inbox.
						Try to send OTP again.
					</p>
				</div>
			</div>
		</Modal>
	);
};

export const SMSNextStep = ({ setCurrentStep }) => {
	return (
		<div className="stepThree-container">
			<h2>SMS OTP Sent!</h2>
			<button
				className="button medium secondary"
				onClick={() => {
					// setIsAfterVerify(true);
					// if (isHaveEmail) {
					// 	setCurrentStep(3);
					// 	navigate("/completeAuth");
					// } else {
					// 	setIsProfileVerify(true);
					// 	navigate("/nextAuth");
					// }
					setCurrentStep(3);
				}}
			>
				Continue
			</button>
		</div>
	);
};

export const EnterOTPComponent = ({ setCurrentStep, otp, setOTP }) => {
	const [activeInput, setActiveInput] = useState(0);
	return (
		<div className="stepTwo-container">
			<p className="step-two-title">2. Verification</p>
			<span className="step-two-subtitle">
				Please enter the code sent to you via sms.
			</span>
			<form className="stepTwo-form otp-form">
				<div className="otp-inputs">
					<OTP />
				</div>
				<button
					className="button medium secondary"
					onClick={(e) => {
						e.preventDefault();
						setCurrentStep(3);
					}}
				>
					Verify
				</button>
				<p className="no-code">
					Didn`t recieve code? <span>Request again</span>
				</p>
			</form>
		</div>
	);
};

export const RegisterStepTwo = ({
	setCurrentStep,
	setIsHaveEmail,
	isHaveEmail,
	setIsEmailConfirm,
}) => {
	return (
		<div className="stepTwo-container">
			<p className="step-two-title">2. Verification</p>
			<span className="step-two-subtitle">
				You will be sent an email confirmation. Only verified members will be
				able to join their affiliate communities.
			</span>
			<form className="stepTwo-form">
				<p className="title">
					Do you have a university email to register with?{" "}
				</p>
				<div className="register-radio-box">
					{/* <div className="radio-box-item">
						<input type="radio" id="yes" name="haveEmail" value={true} />
						<label htmlFor="">Yes</label>
					</div>
					<div className="radio-box-item">
						<input type="radio" id="no" name="haveEmail" value={false} />
						<label htmlFor="">No I don’t</label>
					</div> */}
					<div class="form-row">
						<div class="form-item">
							<div class="checkbox-wrap">
								<input
									type="radio"
									id="yes"
									name="haveEmail"
									value={true}
									checked={isHaveEmail === true}
								/>
								<div class="checkbox-box round"></div>
								<label htmlFor="yes" onClick={() => setIsHaveEmail(true)}>
									Yes
								</label>
							</div>
						</div>
					</div>

					<div class="form-row delete-margin">
						<div class="form-item">
							<div class="checkbox-wrap">
								<input type="radio" id="no" name="haveEmail" value={false} />
								<div class="checkbox-box round"></div>
								<label htmlFor="no" onClick={() => setIsHaveEmail(false)}>
									No I don’t
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="university-email">
					<FormInput
						label={isHaveEmail ? "Username" : "Email"}
						type="email"
						id="university-email"
						name="university_email"
						icon={isHaveEmail ? "username" : "email"}
					/>
					{isHaveEmail === true && (
						<p className="email-domain">@aucegypt.edu</p>
					)}
				</div>

				<div className="student-id">
					<FormInput
						label="Student ID#"
						type="text"
						id="student-id-#"
						name="student_id_#"
					/>
				</div>
				<div className="button-actions">
					<button
						className="button medium white loginButton"
						onClick={(e) => {
							e.preventDefault();
							setCurrentStep(1);
						}}
					>
						Back
					</button>
					<button
						className="button medium secondary loginButton"
						onClick={(e) => {
							e.preventDefault();
							setIsEmailConfirm(true);
							// setCurrentStep(3);
						}}
					>
						Next!
					</button>
				</div>
			</form>
		</div>
	);
};

export const RegisterStepThree = ({
	setIsAfterVerify,
	setCurrentStep,
	isHaveEmail,
	setIsProfileVerify,
}) => {
	const navigate = useNavigate();
	return (
		<div className="stepThree-container">
			<h2>Email Confirmation Sent!</h2>
			<button
				className="button medium secondary"
				onClick={() => {
					setIsAfterVerify(true);
					if (isHaveEmail) {
						setCurrentStep(3);
						navigate("/completeAuth");
					} else {
						setIsProfileVerify(true);
						navigate("/nextAuth");
					}
				}}
			>
				Continue
			</button>
		</div>
	);
};

export const VerificationModel = ({ setIsModalOpen }) => {
	return (
		<Modal>
			<div className="verify-modal">
				<div
					className="close"
					onClick={() => {
						setIsModalOpen((prev) => !prev);
					}}
				>
					<img src={close} alt="Close" />
				</div>
				<div className="logo-modal">
					<img src={Logo} alt="Logo" />
				</div>
				<div className="modal-content">
					<img src={verify} alt="Verify" />
					<h2>Email Confirmation Sent!</h2>
					<p className="desc">
						Check your email to activate your account to complete your
						registration and engage your community.
					</p>
					<span>Check spam folder</span>
					<p className="verify-note">
						Please check your spam folder if the email is not in your inbox.
						Mark us as non-spam to get notifications from your community.
					</p>
				</div>
			</div>
		</Modal>
	);
};

function hasSpecialCharacter(password) {
	const regex = /[!@#$%^&*(),.?":{}|<>]/;
	return regex.test(password);
}

function hasUppercaseLetter(password) {
	const regex = /[A-Z]/;
	return regex.test(password);
}

function hasLowercaseLetter(password) {
	const regex = /[a-z]/;
	return regex.test(password);
}

function hasNumberBetweenZeroAndNine(password) {
	const regex = /[0-9]/;
	return regex.test(password);
}

export const RegisterStepThreePartTwo = ({
	setCurrentStep,
	stepThreeIsChecked,
	setStepThreeIsChecked,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	date,
	setDate,
}) => {
	const isMobileView = window.innerWidth <= 380;
	const [showCalender, setShowCalender] = useState(false);

	return (
		<div className="stepThreePartTwo-container">
			<p className="step-three-title">3. Account Details</p>
			<span className="step-three-subtitle">
				Choose your Username and Password
			</span>
			<form className="form-step-four">
				<FormInput
					label="Username"
					type="text"
					id="username"
					name="username"
					icon={"username"}
				/>
				<div className="margin-inputs"></div>
				<FormInput
					label="Password"
					type="password"
					id="password"
					name="password"
					icon={"password"}
					setValue={setPassword}
				/>
				<div
					className="password-match-requirments slide-bottom"
					style={{ display: password.length > 0 ? "" : "none" }}
				>
					<p style={{ color: password.length >= 6 ? "green" : "red" }}>
						Must be at least 6 characters long.
					</p>
					<p style={{ color: hasLowercaseLetter(password) ? "green" : "red" }}>
						Must contain a lowercase letter.
					</p>
					<p style={{ color: hasUppercaseLetter(password) ? "green" : "red" }}>
						Must contain an uppercase letter.
					</p>
					<p
						style={{
							color:
								hasSpecialCharacter(password) ||
								hasNumberBetweenZeroAndNine(password)
									? "green"
									: "red",
						}}
					>
						Must contain a number or special letter.
					</p>
				</div>
				<div className="margin-inputs"></div>
				<FormInput
					label="Confirm Password"
					type="password"
					id="confirm-password"
					name="confirm_password"
					icon={"password"}
					setValue={setConfirmPassword}
				/>
				<div
					className="password-match-confirm slide-bottom"
					style={{ display: confirmPassword.length > 0 ? "" : "none" }}
				>
					<p style={{ color: confirmPassword === password ? "green" : "red" }}>
						Confirm password doesn`t match password.
					</p>
				</div>
				<div className="margin-inputs"></div>
				<div
					onClick={() => {
						setShowCalender((prev) => !prev);
					}}
				>
					<FormInput
						label="Date of Birth"
						type="text"
						id="date-of-birth"
						name="date_of_birth"
						icon={"date"}
						value={date.toLocaleString("en-us").split(", ")[0]}
					/>
				</div>

				{showCalender && (
					<div style={{ marginTop: "8px" }}>
						<Calendar onChange={setDate} value={date} />
					</div>
				)}

				<FormInput
					label={"Email"}
					type="email"
					id="university-email"
					name="university_email"
					icon={"email"}
				/>
				<p className="note">
					Enter email to receive notifications and updates.
				</p>
				<Select
					optionsArray={maritalStatus}
					defaultValue="Select Marital Status*"
				/>
				<Select optionsArray={gender} defaultValue="Select Gender*" />
				<div
					className="recaptch rc-anchor-normal"
					style={{
						transform: isMobileView ? "scale(0.6)" : "scale(0.7)",
						transformOrigin: "0 0",
					}}
				>
					<ReCaptchaV2
						sitekey="6LeM65opAAAAAI8w0KkzCPLXfwpLSrNiXjY_U5Qh"
						// size={isMobileView ? "compact" : "normal"}
						size={"normal"}
					/>
				</div>
				<FormCheckbox
					label="Agree"
					setIsChecked={setStepThreeIsChecked}
					isChecked={stepThreeIsChecked}
					id="agree"
					name="agree"
				/>
				<button
					className="button medium secondary step-four-button"
					onClick={(e) => {
						e.preventDefault();
						setCurrentStep(4);
					}}
				>
					Let`s Go !
				</button>
			</form>
		</div>
	);
};

export const ProfileVerificationModal = ({ setIsModalProfileOpen }) => {
	return (
		<Modal>
			<div className="verify-modal">
				<div
					className="close"
					onClick={() => {
						setIsModalProfileOpen((prev) => !prev);
					}}
				>
					<img src={close} alt="Close" />
				</div>
				<div className="logo-modal">
					<img src={Logo} alt="Logo" />
				</div>
				<div className="modal-content">
					<img src={verify} alt="Verify" />
					<h2>Account Verification!</h2>
					<p className="desc">
						Our admins will review your application documents. You will recieve
						and email once your account is approved.
					</p>
					{/* <span>Check spam folder</span>
					<p className="verify-note">
						Please check your spam folder if the email is not in your inbox.
						Mark us as non-spam to get notifications from your community.
					</p> */}
				</div>
			</div>
		</Modal>
	);
};

export const ProfileVerification = ({
	setIsProfileVerifyDone,
	setPassportIDImage,
	passportIDImage,
	instituationImage,
	setInstituationImage,
}) => {
	const [completePrecentage, setCompletePrecentage] = useState(0);
	const [showProgress, setShowProgress] = useState(false);

	const handleNextStep = () => {
		setTimeout(() => {
			setCompletePrecentage(30);
		}, 1000);

		setTimeout(() => {
			setCompletePrecentage(67);
		}, 2200);

		setTimeout(() => {
			setCompletePrecentage(100);
		}, 3300);

		setTimeout(() => {
			setIsProfileVerifyDone(true);
		}, 4500);
	};
	return (
		<div className="stepTwo-partTwo-container">
			<p className="stepTwo-partTwo-title">2. Verification Of Profile</p>
			<p className="note-one">Upload documents</p>
			<span className="note-desc">
				Please upload a photo with your passport / ID & your instituation ID
			</span>
			<form action="">
				<div className="images-input">
					{passportIDImage === null && (
						<div class="upload-box" style={{ position: "relative" }}>
							<svg class="upload-box-icon icon-photos">
								<use xlinkHref="#svg-photos"></use>
							</svg>

							<p class="upload-box-title">Copy of your passport or ID card</p>
							<input
								type="file"
								style={{
									opacity: 0,
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									cursor: "pointer",
								}}
								name="passport-or-ID"
								id="passport_or_ID"
								onChange={(e) => {
									const file = e.target.files[0];
									setPassportIDImage(file);
								}}
							/>
						</div>
					)}
					{passportIDImage !== null && (
						<div class="upload-box" style={{ position: "relative" }}>
							<img
								src={URL.createObjectURL(passportIDImage)}
								alt="Passport-Id"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									borderRadius: "10px",
								}}
							/>
							<input
								type="file"
								style={{
									opacity: 0,
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									cursor: "pointer",
								}}
								name="passport-or-ID"
								id="passport_or_ID"
								onChange={(e) => {
									const file = e.target.files[0];
									setPassportIDImage(file);
								}}
							/>
						</div>
					)}
					{instituationImage === null && (
						<div class="upload-box" style={{ position: "relative" }}>
							<svg class="upload-box-icon icon-members">
								<use xlinkHref="#svg-photos"></use>
							</svg>

							<p class="upload-box-title">Institution ID</p>
							<input
								type="file"
								style={{
									opacity: 0,
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									cursor: "pointer",
								}}
								name="insitution-ID"
								id="insitution_ID"
								onChange={(e) => {
									const file = e.target.files[0];
									setInstituationImage(file);
								}}
							/>
						</div>
					)}
					{instituationImage !== null && (
						<div class="upload-box" style={{ position: "relative" }}>
							<img
								src={URL.createObjectURL(instituationImage)}
								alt="instituation"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									borderRadius: "10px",
								}}
							/>
							<input
								type="file"
								style={{
									opacity: 0,
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									cursor: "pointer",
								}}
								name="insitution-ID"
								id="insitution_ID"
								onChange={(e) => {
									const file = e.target.files[0];
									setInstituationImage(file);
								}}
							/>
						</div>
					)}
				</div>
				{showProgress && (
					<div
						className="progressBar"
						style={{ marginTop: "12px", marginBottom: "12px" }}
					>
						<ProgressBar bgColor="#36e9f7" completed={completePrecentage} />
					</div>
				)}
				<button
					className="button secondary medium"
					onClick={(e) => {
						e.preventDefault();
						setShowProgress(true);
						handleNextStep();
					}}
				>
					Send
				</button>
			</form>
		</div>
	);
};

export const ProfileConfirmed = ({ setCurrentStep }) => {
	const navigate = useNavigate();
	return (
		<div className="stepThree-container">
			<h2>Profile Verification!</h2>
			<button
				className="button medium secondary"
				onClick={() => {
					// setCurrentStep(3);
					navigate("/completeAuth");
				}}
			>
				Continue
			</button>
		</div>
	);
};

export const UploadPhotoStepFour = ({
	setRegisterStepFourPartTwo,
	selectedImage,
	setSelectedImage,
}) => {
	const [completePrecentage, setCompletePrecentage] = useState(0);
	const [showProgress, setShowProgress] = useState(false);

	const handleSelectedImage = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	};

	const handleNextStep = () => {
		setTimeout(() => {
			setCompletePrecentage(50);
		}, 1000);

		setTimeout(() => {
			setCompletePrecentage(100);
		}, 2200);

		setTimeout(() => {
			setRegisterStepFourPartTwo(true);
		}, 3000);
	};

	return (
		<div className="stepFour-container-image">
			<p className="upload-photo-title">4. Add your details.</p>
			<span className="upload-desc">Add your personal photo</span>
			<form>
				{selectedImage === null && (
					<div className="form-content">
						{/* <img src={Upload} alt="Uplode Icon" /> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								// fill="currentColor"
								d="M19,6 L19,4 L21,4 L21,6 L23,6 L23,8 L21,8 L21,10 L19,10 L19,8 L17,8 L17,6 L19,6 Z M6.93701956,5.8453758 C7.00786802,5.74688188 7.08655595,5.62630624 7.18689462,5.46372136 C7.24312129,5.37261385 7.44826978,5.03326386 7.48180256,4.97841198 C8.31078556,3.62238733 8.91339479,3 10,3 L15,3 L15,5 L10,5 C9.91327186,5 9.64050202,5.28172235 9.18819752,6.02158802 C9.15916322,6.06908141 8.95096113,6.41348258 8.88887147,6.51409025 C8.76591846,6.71331853 8.66374696,6.86987867 8.56061313,7.0132559 C8.1123689,7.63640757 7.66434207,8 7.0000003,8 L4,8 C3.44771525,8 3,8.44771525 3,9 L3,18 C3,18.5522847 3.44771525,19 4,19 L20,19 C20.5522847,19 21,18.5522847 21,18 L21,12 L23,12 L23,18 C23,19.6568542 21.6568542,21 20,21 L4,21 C2.34314575,21 1,19.6568542 1,18 L1,9 C1,7.34314575 2.34314575,6 4,6 L6.81619668,6 C6.84948949,5.96193949 6.89029794,5.91032846 6.93701956,5.8453758 Z M12,18 C9.23857625,18 7,15.7614237 7,13 C7,10.2385763 9.23857625,8 12,8 C14.7614237,8 17,10.2385763 17,13 C17,15.7614237 14.7614237,18 12,18 Z M12,16 C13.6568542,16 15,14.6568542 15,13 C15,11.3431458 13.6568542,10 12,10 C10.3431458,10 9,11.3431458 9,13 C9,14.6568542 10.3431458,16 12,16 Z"
							></path>
						</svg>
						<p className="upload-action">Upload your photo</p>
						<input
							type="file"
							name="personal-photo"
							id="personal_photo"
							onChange={handleSelectedImage}
						/>
					</div>
				)}
				{selectedImage !== null && (
					<div className="form-content">
						<img
							src={URL.createObjectURL(selectedImage)}
							alt="Profile"
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								borderRadius: "50%",
							}}
						/>
						<input
							type="file"
							name="personal-photo"
							id="personal_photo"
							onChange={handleSelectedImage}
						/>
					</div>
				)}
				{showProgress && (
					<div
						className="progressBar"
						style={{ marginTop: "12px", marginBottom: "12px" }}
					>
						<ProgressBar bgColor="#36e9f7" completed={completePrecentage} />
					</div>
				)}
				<button
					className="button medium secondary"
					onClick={(e) => {
						e.preventDefault();
						setShowProgress(true);
						handleNextStep();
					}}
				>
					Save & Continue
				</button>
			</form>
		</div>
	);
};

export const RegisterStepFourPartTwo = ({ setCurrentStep }) => {
	return (
		<div className="step-five-container">
			<p>4. Add your details</p>
			<span>Tell us about you for a better networking experience.</span>
			<form className="stepFourPartTwoForm">
				<FormInput
					label="First Name"
					type={"text"}
					id="first_name"
					name="first-name"
					icon={"username"}
				/>
				<div style={{ marginTop: "15px" }}>
					<FormInput
						label="Last Name"
						type={"text"}
						id="last_name"
						name="last-name"
						icon={"username"}
					/>
				</div>
				<Select optionsArray={countries} defaultValue="Country of Residence*" />
				<Select optionsArray={countries} defaultValue="City*" />
				<Select optionsArray={countries} defaultValue="Nationality*" />
				<button
					className="button medium secondary"
					onClick={(e) => {
						e.preventDefault();
						setCurrentStep(5);
					}}
				>
					Save & Continue
				</button>
			</form>
		</div>
	);
};

export const RegisterStepFive = ({
	setSelectedIndustries,
	setCurrentStep,
	selectedIndustries,
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	return (
		<div className="stepFiveContainer">
			<p className="stepFiveContainer-title">5. Your Areas of Expertise</p>
			<span className="stepFiveContainer-desc">
				Help other know what you do and your areas of expertise
			</span>
			<form style={{ marginTop: "16px" }}>
				<FormInput
					label={"Current Job Title*"}
					id={"current_job_title"}
					name={"current-job-title"}
					type={"text"}
					icon={"company"}
				/>
				<div style={{ marginTop: "15px" }}>
					<FormInput
						label={"Company Name*"}
						id={"company_name"}
						name={"company-name"}
						type={"text"}
						icon={"company"}
					/>
				</div>
				<div className="industries">
					<p>Select Your Industries</p>
					<span>
						This will help match you with like-minded alumni, and industry
						specific communities.
					</span>
					<div className="industries-slider">
						<span>
							Viewing{" "}
							{currentSlide === 0
								? "9/25"
								: currentSlide === 1
								? "18/25"
								: "25/25"}
						</span>
						<p>
							<span
								style={{
									fontWeight: "bold",
									fontSize: "16px",
									color: "#fd6728",
								}}
							>
								{selectedIndustries.length}
							</span>{" "}
							Industries Selected
						</p>
						<div className="our-swiper">
							<Swiper
								navigation={true}
								modules={[Navigation]}
								onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
								// className="mySwiper"
							>
								<SwiperSlide>
									<div className="our-industries">
										{industries.map((item, index) => {
											return index <= 8 ? (
												<SliderItem
													name={item.name}
													key={item.name + index}
													setSelectedIndustries={setSelectedIndustries}
													selectedIndustries={selectedIndustries}
												/>
											) : (
												""
											);
										})}
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="our-industries">
										{industries.map((item, index) => {
											return index <= 17 && index > 8 ? (
												<SliderItem
													name={item.name}
													key={item.name + index}
													setSelectedIndustries={setSelectedIndustries}
													selectedIndustries={selectedIndustries}
												/>
											) : (
												""
											);
										})}
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="our-industries">
										{industries.map((item, index) => {
											return index > 17 ? (
												<SliderItem
													name={item.name}
													key={item.name + index}
													setSelectedIndustries={setSelectedIndustries}
													selectedIndustries={selectedIndustries}
												/>
											) : (
												""
											);
										})}
									</div>
								</SwiperSlide>
								{/* <SwiperSlide>
									<div className="our-industries">
										{industries.map((item, index) => {
											return index > 23 ? (
												<SliderItem
													name={item.name}
													key={item.name + index}
													setSelectedIndustries={setSelectedIndustries}
													selectedIndustries={selectedIndustries}
												/>
											) : (
												""
											);
										})}
									</div>
								</SwiperSlide> */}
							</Swiper>
						</div>
					</div>
				</div>
				<button
					className="button medium secondary"
					onClick={(e) => {
						e.preventDefault();
						setCurrentStep(6);
					}}
				>
					Save & Continue
				</button>
			</form>
		</div>
	);
};

const SliderItem = ({ setSelectedIndustries, name, selectedIndustries }) => {
	const isSelected = selectedIndustries.find((item) => item === name);
	const itemName = name.split(" ");
	return (
		<div
			className={`slider-item ${isSelected ? "industry-selected" : ""}`}
			onClick={() => {
				setSelectedIndustries((prev) =>
					prev.find((item) => item === name)
						? prev.filter((item) => item !== name)
						: [...prev, name]
				);
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="13.12"
				height="10.792"
				viewBox="0 0 13.12 10.792"
			>
				<g
					id="Group_381"
					data-name="Group 381"
					transform="translate(-3737.271 -5687.402)"
				>
					<g
						id="Group_1416"
						data-name="Group 1416"
						transform="translate(3737.271 5687.402)"
					>
						<g
							id="Group_1415"
							data-name="Group 1415"
							transform="translate(0 2.718)"
						>
							<path
								id="Path_1491"
								data-name="Path 1491"
								d="M3750.391,5698v-.711a1.6,1.6,0,0,0-1.6-1.6h-9.929a1.6,1.6,0,0,0-1.6,1.6V5698Z"
								transform="translate(-3737.271 -5695.69)"
								// fill="#11d8dc"
							/>
							<path
								id="Path_1492"
								data-name="Path 1492"
								d="M3737.271,5706.221v3.023a1.6,1.6,0,0,0,1.6,1.6h9.929a1.6,1.6,0,0,0,1.6-1.6v-3.023Z"
								transform="translate(-3737.271 -5702.767)"
								// fill="#11d8dc"
							/>
						</g>
						<path
							id="Path_1493"
							data-name="Path 1493"
							d="M3747.385,5690.509v-.688a1.189,1.189,0,0,1,1.188-1.188h2.261a1.189,1.189,0,0,1,1.188,1.188v.688h1.231v-.688a2.422,2.422,0,0,0-2.42-2.419h-2.261a2.422,2.422,0,0,0-2.42,2.419v.688Z"
							transform="translate(-3743.24 -5687.402)"
							// fill="#11d8dc"
						/>
					</g>
				</g>
			</svg>

			{itemName.length === 1 && <p style={{ marginTop: "4px" }}>{name}</p>}
			{itemName.length === 2 && (
				<div className="selected-item-name">
					<p>{itemName[0]}</p>
					<p>{itemName[1]}</p>
				</div>
			)}
			{itemName.length === 3 && (
				<div className="selected-item-name">
					<p>{itemName[0]}</p>
					<p>{itemName[1] + " " + itemName[2]}</p>
				</div>
			)}
		</div>
	);
};

export const RegisterStepSix = ({ selectedUniversity, selectedCollege }) => {
	const [isStudentGraduated, setIsStudentGraduated] = useState("No");
	const yourSelectedUniversity = useSelector(
		(state) => state.global.selectedAlumaniUniversity
	);
	const yourSelectedCollege = useSelector(
		(state) => state.global.selectedCollege
	);
	return (
		<div className="stepSixContainer">
			<p>Complete Your Affiliation</p>
			<form style={{ marginTop: "15px" }}>
				<FormInput
					id="university_college"
					name="university-college"
					value={yourSelectedUniversity + " " + yourSelectedCollege}
					label={"Default University"}
					type={"text"}
				/>
				<div className="unversityFromTo">
					<Select
						optionsArray={yearsArray}
						defaultValue="Start Date"
						date={"yes"}
					/>
					<p>To</p>
					<Select optionsArray={yearsArray} defaultValue="" date={"yes"} />
				</div>
				<Select
					defaultValue="Graduated ?"
					optionsArray={isGraduated}
					setValue={setIsStudentGraduated}
				/>
				{isStudentGraduated === "Yes" && (
					<Select
						optionsArray={yearsArray}
						defaultValue={"Graduation Year"}
						date="yes"
					/>
				)}
				<button className="button medium secondary">Save & Continue</button>
			</form>
		</div>
	);
};
