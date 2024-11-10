import { Todo } from '../types/TodoTypes';
import { apiClient } from './ApiClient';

export const getTodos = (userName: string) => {
  return apiClient.get(`/users/${userName}/todos`);
};

export const getTodoById = (userName: string, todoId: number) => {
  return apiClient.get(`/users/${userName}/todos/${todoId}`);
};

export const deleteTodoById = (userName: string, todoId: number) => {
  return apiClient.delete(`/users/${userName}/todos/${todoId}`);
};

export const updateTodoById = (userName: string, todo: Todo) => {
  return apiClient.put(`/users/${userName}/todos/${todo.id}`, todo);
};

export const executeBasicAuthentication = (token: string) => {
  return apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token,
    },
  });
};
