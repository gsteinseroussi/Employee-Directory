import React from "react";
import "./sortButtons.css";

function SortButtons(props) {
  return (
    <div className="row" id="BtnRow">
      <button onClick={props.handleClickABC} id="sortABC" className="col-sm-4">
        Sort A-Z
      </button>
      <button onClick={props.handleClickZYX} id="sortZYX" className="col-sm-4">
        Sort Z-A
      </button>
      <button onClick={props.handleClickReset} id="reset" className="col-sm-4">
        Reset All Filters
      </button>
    </div>
  );
}

export default SortButtons;
