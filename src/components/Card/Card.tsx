import React from "react";
import "./Card.scss";

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
      <img className="image-default" src={image} alt="" />
      <div className="info-details">
        <div className="details-left">
          <p className="">Id: </p>
          <span className="id">{id}</span>
          <p className="details-head">First Name: </p>
          <span className="firstName">{firstName}</span>
          <p className="details-head">Last Name: </p>
          <span className="lastName">{lastName}</span>
        </div>
        <div className="details-right">
          <p className="details-head">Email Address </p>
          <span className="emailId">{emailId}</span>
          <p className="details-head">Phone Number</p>
          <span className="phoneNumber">{phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
