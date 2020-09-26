import React from "react";

function SortButtons(props) {
  return (
    <div className="row">
      <button onClick={props.handleClickABC} id="sortABC">
        Sort A-Z
      </button>
      <button onClick={props.handleClickZYX} id="sortZYX">
        Sort Z-A
      </button>
      <button onClick={props.handleClickReset} id="reset">
        Reset All Filters
      </button>
    </div>
  );
}

export default SortButtons;
