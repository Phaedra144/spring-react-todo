import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodoById } from '../api/TodoApiService';
import { useAuth } from '../security/AuthContext';
import { Todo as TodoType } from '../types/TodoTypes';

export const Todo = () => {
  const { id } = useParams();
  const authContext = useAuth();
  const [todo, setTodo] = useState<TodoType>({
    id: 0,
    description: '',
    isCompleted: false,
    targetDate: new Date(),
  });

  useEffect(() => {
    retrieveTodo();
  }, [id]);

  const retrieveTodo = () => {
    if (id) {
      getTodoById(authContext.userName, parseInt(id))
        .then((response) => {
          setTodo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="container">
      <h1>Todo details</h1>
      <div>
        <h2>Description: {todo.description}</h2>
      </div>
    </div>
  );
};
