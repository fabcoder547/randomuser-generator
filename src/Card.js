import React from "react";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const Mycard = ({ details }) => {
  return (
    <div className="card">
      <img
        width="150"
        height="150"
        src={details.picture?.large}
        className="rounded img-thumbnail rounded-circle"
      />
      <div className="card-header bg-dark">
        <h3>
          <span>{details.name?.title}.</span>
          <span>{details.name?.first} </span>
          <span>{details.name?.last}</span>
        </h3>
      </div>
      <div className="card-body">
        <p>
          <span className="location text-danger">
            <FaMapMarkerAlt /> {details.location?.city}
          </span>
          <span className="age  text-danger">Age: {details.dob?.age}</span>
        </p>
        <p>
          <span className=" text-danger">
            {" "}
            <FaPhone /> {details.phone}
          </span>

          <span className="gender  text-danger">Gender: {details.gender}</span>
        </p>
        <p>
          <span className=" text-danger">
            {" "}
            <FaEnvelope /> {details.email}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Mycard;
