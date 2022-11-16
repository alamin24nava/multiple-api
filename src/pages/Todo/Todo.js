import React from "react";

export default function Todo(props) {
  const todo = props.todo;
  return (
    <div className="col-3">
      <div className="todo-list mb-3">
        <h6>{todo.title}</h6>
        {todo.completed === true ? (<span className="badge bg-success">Completed</span>):(<span className="badge bg-danger">Uncompleted</span>)}
      </div>
    </div>
  );
}
