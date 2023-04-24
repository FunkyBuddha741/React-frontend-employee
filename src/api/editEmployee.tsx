import React from 'react';
import { apiEndPoints } from '../apiEndpoints';
import axios from 'axios';

const editEmployee = async (
	data: any,
	setData: any,
	employeeId: any,
	payload: any
) => {
	setData({ ...data, loading: true, error: false, success: false, data: {} });
	await axios
		.put(`${apiEndPoints.ADD_EMPLOYEE}/${employeeId}`, payload)
		.then(async (res) => {
			if (res.status === 200) {
				await setData({
					...data,
					loading: false,
					success: true,
				});
			} else {
				setData({ ...data, loading: false, error: true, success: false });
			}
		})
		.catch((err) => {
			setData({ ...data, loading: false, error: true, success: false });
			console.log(err);
		});
};

export default editEmployee;
