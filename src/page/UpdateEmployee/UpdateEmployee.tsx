import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import getEmployeeById from '../../api/getEmployeesById';
import editEmployee from '../../api/editEmployee';

type FormData = {
	firstName: string;
	lastName: string;
	emailId: string;
};

const UpdateEmployee = () => {
	const [formData, setFormData] = useState({
		loading: false,
		errors: false,
		success: false,
		data: { firstName: '', lastName: '', emailId: '' },
	});

	let { id } = useParams();

	useEffect(() => {
		getEmployeeById(formData, setFormData, id);
	}, []);

	const {
		register,
		handleSubmit,
		watch,
		clearErrors,
		formState: { errors },
	} = useForm<FormData>();

	const navigate = useNavigate();

	const onSubmit = (payload: any) => {
		editEmployee(formData, setFormData, id, payload);
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
					defaultValue={formData.data.firstName}
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
					defaultValue={formData.data.lastName}
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
					defaultValue={formData.data.emailId}
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

export default UpdateEmployee;
