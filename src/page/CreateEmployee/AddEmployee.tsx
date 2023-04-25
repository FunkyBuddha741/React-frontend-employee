import React, { useState } from 'react';
import './addEmployee.scss';
import Form from '../../components/Form/Form';
import { useForm } from 'react-hook-form';
import addEmployee from '../../api/addEmployee';
import { useNavigate } from 'react-router-dom';

type FormData = {
	firstName: string;
	lastName: string;
	emailId: string;
};

const AddEmployee = () => {
	const [internalState, setIntetnalState] = useState({
		firstName: '',
		lastName: '',
		emailId: '',
	});

	const [formData, setFormData] = useState({
		loading: false,
		errors: false,
		success: false,
		data: [],
	});

	const {
		register,
		handleSubmit,
		watch,
		clearErrors,
		formState: { errors },
	} = useForm<FormData>();

	const navigate = useNavigate();

	const onSubmit = (payload: any) => {
		addEmployee(formData, setFormData, payload);
		navigate('/');
	};
	return (
		<div className="wrapper">
			<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
				<label className="label-mod">Enter your First Name</label>
				<input
					className="form-input"
					{...register('firstName', { required: true })}
					placeholder="First name.."
					defaultValue={internalState.firstName}
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
					defaultValue={internalState.lastName}
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
					defaultValue={internalState.emailId}
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

export default AddEmployee;
