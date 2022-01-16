import React from "react";
import PropTypes from "prop-types";
import TodoForm from "../../components/TodoForm";

ListPage.propTypes = {};

function ListPage(props) {
  function handleTodoFormSubmit(values) {
    console.log("handleTodoFormSubmit: ", values);
    const newTodo = {
      title: values.title,
    };
  }
  return (
    <div>
      <h3>what todo </h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default ListPage;
