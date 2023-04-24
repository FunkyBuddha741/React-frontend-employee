import { useForm } from 'react-hook-form';
import './Form.scss';
import { useState } from 'react';

type FormData = {
	firstName: string;
	lastName: string;
	emailId: string;
};

const Form = ({ closeForm, handleform, formData, setFormData }: any) => {
	const [internalState, setIntetnalState] = useState({
		firstName: '',
		lastName: '',
		emailId: '',
	});

	const {
		register,
		handleSubmit,
		watch,
		clearErrors,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (payload: any) => {
		console.log(payload);
		handleform(formData, setFormData, payload);
		closeForm(true);
	};

	// useEffect(() => {
	// 	if (Object.keys(errors).length !== 0) {
	// 		const interval = setInterval(() => {
	// 			clearErrors(['firstName', 'lastName', 'emailId']);
	// 			clearInterval(interval);
	// 		}, 2000);
	// 	}
	// 	console.log('here');
	// }, [clearErrors, errors, onSubmit]);

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

export default Form;
