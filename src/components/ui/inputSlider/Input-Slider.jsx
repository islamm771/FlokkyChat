import React, { useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
const IntegerStep = ({ max }) => {
	const [inputValue, setInputValue] = useState(1);
	const onChange = (newValue) => {
		setInputValue(newValue);
	};
	return (
		<Row>
			<Col span={12}>
				<Slider
					min={0}
					max={300}
					onChange={onChange}
					value={typeof inputValue === "number" ? inputValue : 0}
					handleActiveColor={"#fd6729"}
				/>
			</Col>
			<Col span={4}>
				<InputNumber
					min={0}
					max={300}
					style={{
						margin: "0 16px",
					}}
					value={inputValue}
					onChange={onChange}
				/>
			</Col>
		</Row>
	);
};
// const DecimalStep = () => {
// 	const [inputValue, setInputValue] = useState(0);
// 	const onChange = (value) => {
// 		if (isNaN(value)) {
// 			return;
// 		}
// 		setInputValue(value);
// 	};
// 	return (
// 		<Row>
// 			<Col span={12}>
// 				<Slider
// 					min={0}
// 					max={1}
// 					onChange={onChange}
// 					value={typeof inputValue === "number" ? inputValue : 0}
// 					step={0.01}
// 				/>
// 			</Col>
// 			<Col span={4}>
// 				<InputNumber
// 					min={0}
// 					max={1}
// 					style={{
// 						margin: "0 16px",
// 					}}
// 					step={0.01}
// 					value={inputValue}
// 					onChange={onChange}
// 				/>
// 			</Col>
// 		</Row>
// 	);
// };
const InputSlider = () => (
	<Space
		style={{
			width: "100%",
			margin: "15px 0",
		}}
		direction="vertical"
	>
		<p style={{ fontSize: "1rem", fontWeight: "600" }}>
			Location Distance (Km)
		</p>
		<IntegerStep />
		{/* <DecimalStep /> */}
	</Space>
);
export default InputSlider;
