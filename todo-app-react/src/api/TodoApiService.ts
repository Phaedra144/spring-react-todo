import axios from 'axios';
import { Todo } from '../types/TodoTypes';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

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
