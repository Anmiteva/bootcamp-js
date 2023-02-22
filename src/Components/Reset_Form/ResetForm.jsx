import React from 'react';
import { useState } from 'react';
import './ResetForm.scss';
import ResetInput from './Reset_Input/ResetInput';

const ResetForm = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const inputs = [
		{
			id: 1,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			errorMassage: 'It should be a valid email address!',
			label: 'Email',
			required: true,
		},
		{
			id: 2,
			name: 'password',
			type: 'text',
			placeholder: 'new password',
			errorMassage:
				'Password should be 10-20 characters and first letter must be capitalized!',
			label: 'password',
			pattern: '^[A-Z]+[a-zA-Z0-9!@#$%^&* ]{10,20}$',
			required: true,
		},
		{
			id: 3,
			name: 'password',
			type: 'text',
			placeholder: 'confirm new password',
			errorMassage:
				'Password should be 10-20 characters and first letter must be capitalized!',
			label: 'password',
			pattern: '^[A-Z]+[a-zA-Z0-9!@#$%^&* ]{10,20}$',
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	//changing values
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div className='resetForm'>
			<div className='decorationDiv'>
				<img
					src='../../../header_decorator_dark.png'
					alt='decoration'
				/>
				<h2>Forgot password?</h2>
				<img
					src='../../../header_decorator_dark.png'
					alt='orange'
				/>
			</div>
			<p>No worries, we'll send you reset instructions.</p>

			<div className='reset-box'>
				<form onSubmit={handleSubmit}>
					{inputs.map((input) => (
						<ResetInput
							key={input.id}
							inputtype={input.type}
							{...input}
							value={values[input.name]}
							onChange={onChange}
						/>
					))}
				</form>
				<button>Reset</button>
			</div>
		</div>
	);
};

export default ResetForm;
