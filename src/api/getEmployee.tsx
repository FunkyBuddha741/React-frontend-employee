import React from 'react';
import { apiEndPoints } from '../apiEndpoints';
import axios from 'axios';

const getEmployee = (data: any, setData: any) => {
	setData({ ...data, loading: true, error: false, success: false, data: {} });
	axios
		.get(apiEndPoints.GET_EMPLOYEE)
		.then((res) => {
			if (res.status === 200) {
				setData({
					...data,
					loading: false,
					success: true,
					error: false,
					data: res?.data,
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

export default getEmployee;
