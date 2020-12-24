import React from "react";

const Form = () => {
  return (
    <form action="" id="form">
      <input type="text" name="todo" id="todo" />
      <button className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
