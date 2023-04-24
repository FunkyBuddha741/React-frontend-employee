import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import ButtonComponent from './components/Button/ButtonComponent';
import getEmployee from './api/getEmployee';
import addEmployee from './api/addEmployee';
import deleteEmployee from './api/deleteEmployee';
import Loader from './components/Loader/Loader';
import ModalOverLay from './components/ModalOverlay/ModalOverLay';

function App() {
	const [isTrue, setIsTrue] = useState<boolean>(true);
	const [tableData, setTableData] = useState({
		loading: false,
		error: false,
		success: false,
		data: [],
	});

	const [formData, setFormData] = useState({
		loading: false,
		error: false,
		success: false,
		data: [],
	});

	useEffect(() => {
		getEmployee(tableData, setTableData);
	}, [formData?.loading, tableData?.loading]);

	return (
		<div className="App">
			<ButtonComponent
				type={'button'}
				name={'Add Employee'}
				onClick={() => setIsTrue(false)}
				children="Add Employee"
			/>
			<ModalOverLay
				isOpen={isTrue}
				onClose={() => setIsTrue(true)}
				children={
					<Form
						closeForm={setIsTrue}
						handleform={addEmployee}
						formData={formData}
						setFormData={setFormData}
					/>
				}
			/>
			{tableData?.loading && <Loader />}
			{tableData?.success && (
				<Table
					allData={tableData}
					setAllData={setTableData}
					deleteEmployee={deleteEmployee}
				/>
			)}
		</div>
	);
}

export default App;
