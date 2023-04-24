import React from 'react';
import './modalOverlay.scss';

const ModalOverLay = ({ isOpen, onClose, children }: any) => {
	return (
		<>
			{!isOpen && (
				<div className="modal">
					<div className="modal_background" onClick={onClose} />
					<div className="modal_container">{children}</div>
				</div>
			)}
		</>
	);
};

export default ModalOverLay;
