import React from "react";

export const TodoList = () => {
  const todos = [
    {
      id: 1,
      description: "Learn React",
      isCompleted: false,
      targetDate: new Date(),
    },
    {
      id: 2,
      description: "Learn AWS",
      isCompleted: false,
      targetDate: new Date(),
    },
    {
      id: 3,
      description: "Learn BigData",
      isCompleted: false,
      targetDate: new Date(),
    },
  ];
  return (
    <div className="d-flex flex-column align-content-around flex-wrap">
      <h1>Todo List</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Is Completed</th>
              <th>Target Date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.isCompleted ? "Yes" : "No"}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
