import React from 'react';
import { apiEndPoints } from '../apiEndpoints';
import axios from 'axios';

const deleteEmployee = async (data: any, setData: any, employeeId: any) => {
	setData({ ...data, loading: true, error: false, success: false, data: {} });
	await axios
		.delete(`${apiEndPoints.ADD_EMPLOYEE}/${employeeId}`)
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

export default deleteEmployee;
