import React, { useEffect, useState } from 'react';
import { deleteTodoById, getTodos } from '../api/TodoApiService';
import { useAuth } from '../security/AuthContext';
import { Todo } from '../types/TodoTypes';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const authContext = useAuth();

  useEffect(() => {
    refreshTodos();
  }, []);

  const refreshTodos = () => {
    getTodos(authContext.userName)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = (id: number) => {
    deleteTodoById(authContext.userName, id)
      .then(() => {
        refreshTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Is Completed</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.isCompleted ? 'Yes' : 'No'}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn btn-success">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
