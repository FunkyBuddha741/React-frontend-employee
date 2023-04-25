import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getEmployee from '../../api/getEmployee';
import './home.scss';
import deleteEmployee from '../../api/deleteEmployee';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const [tableData, setTableData] = useState({
		loading: false,
		success: false,
		errors: false,
		data: [],
	});

	const history = useNavigate();

	const handleDelete = (item: any) => {
		deleteEmployee(tableData, setTableData, item.id);
	};

	const handleEdit = (item: any) => {
		history(`/edit_employee/${item.id}`);
	};

	useEffect(() => {
		getEmployee(tableData, setTableData);
	}, []);

	return (
		<div className="home_container">
			<span className="link-box">
				<Link className="link" to={'/addEmployee'}>
					Add Employee
				</Link>
			</span>

			{tableData?.loading && <Loader />}
			{tableData?.success && (
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
							{tableData?.data?.map((item: any, i: any) => {
								return (
									<tr key={i}>
										<td>{item.id}</td>
										<td>{item.firstName}</td>
										<td>{item.lastName}</td>
										<td>{item.emailId}</td>
										<td>
											<i
												className="fa fa-edit"
												onClick={() => handleEdit(item)}
											></i>
										</td>
										<td>
											<i
												className="fa fa-times"
												onClick={() => handleDelete(item)}
											></i>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default Home;
