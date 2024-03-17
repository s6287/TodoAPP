import "./App.css";
import React, { useState } from "react";
import Todoinput from "./Todoinput";
import Todolist from "./Todolist";

function App() {
  const [lisTodo, setListTodo] = useState([]);

  function addList(Input) {
    if (Input !== "") {
      setListTodo([...lisTodo, Input]);
    }
  }

  function deleteItem(key) {
    let newlistTodo = [...lisTodo];
    newlistTodo.splice(key, 1);
    setListTodo(newlistTodo);
  }

  return (
    <>
      <div class="main">
        <h1 style={{ color: "white" }}>To Do App</h1>
        <Todoinput addList={addList} />
        <center>
          {" "}
          <h1> Your Task </h1>{" "}
        </center>
        <hr />

        {lisTodo.map(function (listItem, index) {
          return (
            <Todolist
              key={index}
              index={index}
              item={listItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
