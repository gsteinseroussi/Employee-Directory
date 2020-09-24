import React, { Component } from "react";
import "./Jumbotron.css";
import EmployeeCard from "../Employee-Card/index";

class Jumbotron extends Component {
  state = {
    employee: [],
  };

  renderCard(emp) {
    return (
      <EmployeeCard
        firstName={emp[0].name.first}
        lastName={emp[0].name.last}
        email={emp[0].email}
        phone={emp[0].phone}
        address={emp[0].location.street}
        image={emp[0].picture.medium}
      />
    );
  }

  runApiCall() {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          employee: [result.results],
        });
        console.log(this.state.employee);
      });
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Info</h1>
          {fetch("https://randomuser.me/api/?results=10")
            .then((res) => res.json())
            .then((result) => {
              this.setState({
                employee: [result.results],
              });
              console.log(this.state.employee);
            })}
          {/* {this.state.employee.map((employee) => (
            <EmployeeCard
              firstName={employee.name.first}
              lastName={employee.name.last}
              email={employee.email}
              phone={employee.phone}
              address={employee.location.street}
              image={employee.picture.medium}
            />
          ))} */}
        </div>
      </div>
    );
  }
}

export default Jumbotron;
