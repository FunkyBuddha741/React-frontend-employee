import React from 'react';
import './ButtonComponent.scss';

type ButtonProps = {
	type: 'button' | 'submit' | 'reset' | undefined;
	name: string;
	onClick: () => void;
	children?: string;
	isDisabled?: boolean;
};

const ButtonComponent = ({
	type,
	name,
	onClick,
	children,
	isDisabled,
}: ButtonProps) => {
	return (
		<div className="button-container">
			<button
				className={`button-component`}
				name={name}
				type={type}
				onClick={() => onClick()}
				disabled={isDisabled}
			>
				{children}
			</button>
		</div>
	);
};

export default ButtonComponent;
