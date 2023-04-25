import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Items from './page/items/Items';
import Home from './page/home/Home';
import Header from './components/Header/Header';
import AddEmployee from './page/CreateEmployee/AddEmployee';
import UpdateEmployee from './page/UpdateEmployee/UpdateEmployee';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/addEmployee',
		element: <AddEmployee />,
	},
	{
		path: `/edit_employee/:id`,
		element: <UpdateEmployee />,
	},

	{
		path: '/app',
		element: <App />,
	},
	{
		path: '/cards',
		element: <Items />,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Header />
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
