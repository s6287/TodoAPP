import React from 'react'
import { useState } from 'react'

function Todoinput(props) {

  const [Input, Setinput] = useState("")
  function Displaytask(e) {
    Setinput(e.target.value)
  }
  return (
    <>
      <div class="header">
        <div clasName="input-box">
          {/* <h1> {Input }</h1> */}
          <input
            type="text"
            placeholder="Enter your Task"
            value={Input}
            onChange={Displaytask}
          ></input>
        </div>

        <div className="btn">
          <button
            type="button"
            onClick={() => {
              alert("Task Added");
              props.addList(Input);
              Setinput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Todoinput
