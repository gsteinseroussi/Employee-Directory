import React from "react";

function DropdownMenu() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort By
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item" type="button">
          Alphabetical
        </button>
        <button className="dropdown-item" type="button">
          Age Highest First
        </button>
        <button className="dropdown-item" type="button">
          Age Youngest First
        </button>
      </div>
    </div>
  );
}

export default DropdownMenu;
