import React from "react";
import "./employeeCard.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <ul>
          <li>
            <p> Name: </p>
            {props.firstName} {props.lastName}
          </li>
          <li>
            <p> Email: </p> {props.email}
          </li>
          <li>
            <p> Phone Number: </p>
            {props.phone}
          </li>
          <li>
            <p> Address: </p>
            {props.address}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
