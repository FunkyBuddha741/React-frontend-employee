import React from 'react';
import { apiEndPoints } from '../apiEndpoints';
import axios from 'axios';

const addEmployee = async (data: any, setData: any, payload: any) => {
	setData({ ...data, loading: true, error: false, success: false, data: [] });
	await axios
		.post(apiEndPoints.ADD_EMPLOYEE, payload, {
			headers: { 'Content-Type': 'application/json' },
		})
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

export default addEmployee;
