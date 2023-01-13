import React from 'react';
import { useState } from 'react';
import './ContactForm.scss';
import FormInput from './FormInput/FormInput';

const ContactForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const inputs = [
		{
			id: 1,
			name: 'name',
			type: 'text',
			placeholder: 'Name',
			errorMassage:
				"Name should be 2-100 characters and shouldn't include special characters!",
			label: 'Name',
			pattern: '^[A-Za-z0-9 ]{2,100}$',
			required: true,
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			errorMassage: 'It should be a valid email address!',
			label: 'Email',
			required: true,
		},
		{
			id: 3,
			name: 'subject',
			type: 'text',
			placeholder: 'Subject',
			errorMassage:
				'Subject should be 10-200 characters and first letter must be capitalized!',
			label: 'Subject',
			pattern: '^[A-Z]+[a-zA-Z0-9!@#$%^&* ]{10,200}$',
			required: true,
		},
		{
			id: 4,
			name: 'message',
			type: 'textarea',
			placeholder: 'Message',
			errorMassage: 'Message should be 10-500 characters!',
			pattern: '^[a-zA-Z0-9!@#$%^&* ]{10,500}$',
			label: 'Message',
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
		<div className='contactForm'>
			<div className='decorationDiv'>
				<img
					src='../../../header_decorator_dark.png'
					alt='decoration'
				/>

				<h2>Contact</h2>

				<img
					src='../../../header_decorator_dark.png'
					alt='orange'
				/>
			</div>

			<p>ул. „Димитър Икономов“ 19, 9010 Левски, Варна</p>

			<form onSubmit={handleSubmit}>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						inputtype={input.type}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
			</form>

			<button>Submit</button>
		</div>
	);
};

export default ContactForm;
