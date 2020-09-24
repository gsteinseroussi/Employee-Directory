import React, { Component } from "react";
import "./Jumbotron.css";
import EmployeeCard from "../Employee-Card/index";

class Jumbotron extends Component {
  state = {
    employee: [],
  };

  // renderCard(emp) {
  //   return (
  //     <EmployeeCard
  //       firstName={emp[0].name.first}
  //       lastName={emp[0].name.last}
  //       email={emp[0].email}
  //       phone={emp[0].phone}
  //       address={emp[0].location.street}
  //       image={emp[0].picture.medium}
  //     />
  //   );
  // }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          employee: result.results,
        });
        console.log(this.state.employee);
      });
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log("Sort Alphabetically");
    console.log(this.state.employee);
    const sortedState = this.state.employee.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    console.log(sortedState);
    this.setState({
      employee: sortedState,
    });
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Info</h1>
          <button onClick={this.handleClick}>Sort Alphabetically</button>
          <div className="row">
            {this.state.employee.length === 0 ? (
              <p></p>
            ) : (
              this.state.employee.map((employee) => (
                <EmployeeCard
                  key={employee.login.uuid}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  email={employee.email}
                  phone={employee.phone}
                  address={employee.location.street}
                  image={employee.picture.large}
                  city={employee.location.city}
                  country={employee.location.country}
                  age={employee.dob.age}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
