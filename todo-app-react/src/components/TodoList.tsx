import React, { useEffect, useState } from 'react';
import { deleteTodoById, getTodos } from '../api/TodoApiService';
import { useAuth } from '../security/AuthContext';
import { Todo } from '../types/TodoTypes';
import { useNavigate } from 'react-router-dom';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    refreshTodos();
  }, [todos]);

  const refreshTodos = () => {
    getTodos('admin')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = (id: number) => {
    deleteTodoById('admin', id)
      .then(() => {
        refreshTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTodo = (id: number) => {
    navigate(`/todos/${id}`);
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
                  <button className="btn btn-success" onClick={
                    () => updateTodo(todo.id)
                  }>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
