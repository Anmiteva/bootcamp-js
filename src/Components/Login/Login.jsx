import React from 'react';
import { useState } from 'react';
import './Login.scss';
import LoginInput from './LoginInput/LoginInput';

const Login = () => {
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
			type: 'password',
			placeholder: 'Password',
			errorMassage: 'It should be a valid password!',
			label: 'Subject',
			// pattern: '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$',
			pattern:
				'/^.*(?=.{8,120})(?!.*s)(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[!@#$%^&*()-=¡£_+`~.,<>/?;:\'"\\|[]{}]).*$/',
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
	// console.log(values)

	return (
		<div className='login'>
			<div className='decorationDiv'>
				<img src='../../../header_decorator_dark.png' alt='decoration' />

				<h2>Log in</h2>

				<img src='../../../header_decorator_dark.png' alt='orange' />
			</div>

			<div className='login-decoration'>
				<form onSubmit={handleSubmit}>
					{inputs.map((input) => (
						<LoginInput
							key={input.id}
							inputtype={input.type}
							{...input}
							value={values[input.name]}
							onChange={onChange}
						/>
					))}
				</form>

				<button>Log in</button>

				<div className='remember-me'>
					<span>
						<input type='checkbox' name='remember-me' id='remember-me' /> Remember me!
					</span>

					<p>
						<a href='/ResetForm'>Forgot password?</a>
					</p>
				</div>
				<span className='account'>
					Don't have an account? <a href='/sign-up'>Sign up</a>
				</span>

				<div className='icons-links'>
					<a href='https://www.facebook.com/profile.php?id=100090250816806'>
						<img src='./facebook.png' alt='user' />
					</a>
					<a href='https://www.instagram.com/'>
						<img src='./instagram.png' alt='user' />
					</a>
					<a href='https://twitter.com/?lang=bg'>
						<img src='./twitter.png' alt='user' />
					</a>
					<a href='https://www.pinterest.com/'>
						<img src='./pinterest.png' alt='user' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
