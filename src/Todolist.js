import React from "react";

function Todolist(props) {
  return (
    <div className="listbox">
      <div class="props">{props.item}</div>
      <div className="Button">
        <button
          onClick={() => {
            // Display an alert
            alert("Are you sure you want to delete this item?");
            // Call the deleteItem function
            props.deleteItem(props.index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todolist;
