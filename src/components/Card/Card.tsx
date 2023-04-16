import React from 'react';
import './Card.scss';
import img from '../../image/car.jpg';
import ButtonComponent from '../Button/ButtonComponent';

type CardDetails = {
	id: number;
	image: string;
	firstName: string;
	lastName: string;
	emailId: string;
	phoneNumber: number;
};

const Card = ({
	id,
	image,
	firstName,
	lastName,
	emailId,
	phoneNumber,
}: CardDetails) => {
	return (
		<div className="card-container">
			<img className="image-default" src={img} alt="" />

			<div className="info-details">
				<h3 className="heading">Title</h3>
				<p className="message">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab totam
					eius quasi unde, cum dolorum vel eaque aliquid vero incidunt.
					Voluptate nostrum incidunt repellendus tempora vero, dolor aut
					corporis id.
				</p>
				<ButtonComponent
					type={'button'}
					name={''}
					onClick={function (): void {
						throw new Error('Function not implemented.');
					}}
				>
					Analyze
				</ButtonComponent>
			</div>
		</div>
	);
};

export default Card;
