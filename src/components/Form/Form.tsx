import React, { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './Form.scss';
import axios from 'axios';
import addEmployee from '../../api/addEmployee';
import getEmployee from '../../api/getEmployee';

type FormData = {
	firstName: string;
	lastName: string;
emailId: string;		
};

const Form = ({ closeForm }: any) => {
	const [formData, setFormData] = useState<any>({
		loading: false,
		error: false,
		success: false,
		errors: {},
		data: {},
	});

	const [allData, setAllData] = useState<any>({
		loading: false,
		error: false,
		success: false,
		errors: {},
		data: {},
	});

	const {
		register,
		handleSubmit,
		watch,
		clearErrors,
		formState: { errors },
	} = useForm<FormData>();
	console.log(Object.keys(errors).length !== 0);

	const onSubmit: SubmitHandler<FormData> = useCallback(
		(payload) => {
			const res = addEmployee(formData, setFormData, payload);
			console.log(res);
		},
		[errors]
	);

	useEffect(() => {
		getEmployee(allData, setAllData);
	}, []);

	useEffect(() => {
		if (Object.keys(errors).length !== 0) {
			const interval = setInterval(() => {
				clearErrors(['firstName', 'lastName', 'emailId']);
				clearInterval(interval);
			}, 2000);
		}
		console.log('here');
	}, [clearErrors, errors, onSubmit]);

	return (
		<div className="wrapper">
			<button className="button-close" onClick={() => closeForm(true)}>
				X
			</button>
			<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
				<label className="label-mod">Enter your First Name</label>
				<input
					className="form-input"
					{...register('firstName', { required: true })}
					placeholder="First name.."
				/>
				{errors.firstName?.type === 'required' && (
					<p className="error-message" role="alert">
						First name is required
					</p>
				)}
				<label className="label-mod">Enter your Last Name</label>
				<input
					className="form-input"
					{...register('lastName', { required: true })}
					placeholder="Last name.."
				/>
				{errors.lastName?.type === 'required' && (
					<p className="error-message" role="alert">
						Last name is required
					</p>
				)}
				<label className="label-mod">Enter your Email Address</label>
				<input
					className="form-input"
					{...register('emailId', { required: true })}
					placeholder="Email address.."
				/>
				{errors.emailId?.type === 'required' && (
					<p className="error-message" role="alert">
						Email Id is required
					</p>
				)}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Form;
