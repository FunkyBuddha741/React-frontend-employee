import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import ButtonComponent from './components/Button/ButtonComponent';

function App() {
	const [isTrue, setIsTrue] = useState<boolean>(false);
	const handleClick = () => {
		setIsTrue(!isTrue);
	};

	return (
		<div className="App">
			<ButtonComponent
				type={'button'}
				name={'Add Employee'}
				onClick={handleClick}
				children="Add Employee"
			/>
			{isTrue && (
				<div className="form-overlay">
					<div className="form" onClick={() => console.log('form')}>
						<Form closeForm={setIsTrue} />
					</div>
				</div>
			)}
			
		</div>
	);
}

export default App;
