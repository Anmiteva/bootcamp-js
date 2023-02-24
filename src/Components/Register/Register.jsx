import React, { useState } from 'react';
import FormInput from '../Contact_Form/FormInput/FormInput';
import { Col, Container, Row } from 'react-bootstrap';
import './Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
		repeatPassword: '',
		name: '',
		phoneNumber: '',
		adress: '',
		age: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
	};

	const registerForm = [
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
			type: 'password',
			placeholder: 'Password',
			errorMassage:
				'Password should contain minimum eight characters, at least one upper case, at least one lower case, one number and one special character!',
			label: 'Password',
			pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
			required: true,
		},
		{
			id: 3,
			name: 'repeatPassword',
			type: 'password',
			placeholder: 'Repeat Password',
			errorMassage:
				'Password should contain minimum eight characters, at least one upper case, at least one lower case, one number and one special character!',
			label: 'Repeat Password',
			pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
			required: true,
		},
		{
			id: 4,
			name: 'name',
			type: 'text',
			placeholder: 'First and Last name',
			errorMassage: 'Name should include at least two capital letters !',
			label: 'Name',
			pattern: "^s*([A-Za-z]{1,}([.,] |[-']| ))+[A-Za-z]+.?s*$",
			required: true,
		},
		{
			id: 5,
			name: 'phoneNumber',
			type: 'text',
			placeholder: 'Phone number',
			errorMassage: 'Phone number should contain at least 10 numbers !',
			label: 'Phone Number',
			pattern: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
			required: true,
		},
		{
			id: 6,
			name: 'adress',
			type: 'text',
			placeholder: 'Adress',
			errorMassage: 'TODOO',
			label: 'adress',
			// pattern: '^[A-Za-z]{2,100}$', TODOO
			required: true,
		},
		{
			id: 7,
			name: 'age',
			type: 'number',
			placeholder: 'Age',
			errorMassage: 'Age should not be negative !',
			label: 'Age',
			pattern: '^S[0-9]{0,3}$',
			required: true,
		},
	];

	return (
		<div className='registration-wrapper'>
			<Container>
				<Row>
					<Col>
						<div className='form-wrapper'>
							<div className='title'>
								<img src='../../../header_decorator_dark.png' alt='decoration' />
								<h2>Register</h2>
								<img src='../../../header_decorator_dark.png' alt='decoration' />
							</div>
							<div className='login-subtitle'>
								<span>You already have an account ?</span>
								<Link to='../login'>Login</Link>
							</div>
							<form onSubmit={handleSubmit}>
								{registerForm.map((input) => (
									<FormInput
										key={input.id}
										inputtype={input.type}
										{...input}
										value={inputValues[input.name]}
										onChange={onChange}
									/>
								))}
								<input type='submit' value='Register' />
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Register;
