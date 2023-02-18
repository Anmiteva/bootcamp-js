import React from 'react';
import { useState } from 'react';
import './LoginInput.scss';

const LoginInput = (props) => {
	const [focused, setFocused] = useState(false);

	//destructing these we don't use in our label
	const { label, onChange, errorMassage, id, ...inputProps } = props;

	const handleFocus = (e) => {
		setFocused(true);
	};

	return (
		<div className='loginInput'>
			<label>{label}</label>
			{/* {props.inputtype} */}
			{props.inputtype !== 'textarea' ? (
				<>
					<input
						{...inputProps}
						onChange={onChange}
						onBlur={handleFocus}
						onFocus={() =>
							inputProps.name === 'message' && setFocused(true)
						}
						focused={focused.toString()}
					/>
					<span>{errorMassage}</span>
				</>
			) : (
				<>
					<textarea
						{...inputProps}
						onChange={onChange}
						onBlur={handleFocus}
						onFocus={() =>
							inputProps.name === 'message' && setFocused(true)
						}
						focused={focused.toString()}
					/>
					<span>{errorMassage}</span>
				</>
			)}
		</div>
	);
};

export default LoginInput;
