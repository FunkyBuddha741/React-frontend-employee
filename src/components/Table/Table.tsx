import React, { useEffect, useState } from 'react';
import './table.scss';
import editEmployee from '../../api/editEmployee';
import ModalOverLay from '../ModalOverlay/ModalOverLay';
import Form from '../Form/Form';

const Table = ({
	allData,
	setAllData,
	deleteEmployee,
}: any) => {
	const handleDelete = (item: any) => {
		deleteEmployee(allData, setAllData, item.id);
	};

	return (
		<div className="table-container">
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email Address</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{allData?.data?.map((item: any, i: any) => {
						return (
							<tr key={i}>
								<td>{item.id}</td>
								<td>{item.firstName}</td>
								<td>{item.lastName}</td>
								<td>{item.emailId}</td>
								<td>
									<button className="button-td">Edit</button>
								</td>
								<td>
									<button
										className="button-td"
										onClick={() => handleDelete(item)}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
