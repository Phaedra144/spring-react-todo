package com.spring.react.todoapp.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

import com.spring.react.todoapp.dtos.TodoDto;

@Service
public class TodoService {

  private static List<TodoDto> todos = new ArrayList<>();

  static {
    todos.add(new TodoDto(1, "Learn AWS", false, LocalDate.now().plusDays(3), "admin"));
    todos.add(new TodoDto(2, "Learn Spring Boot", false, LocalDate.now().plusDays(10), "admin"));
    todos.add(new TodoDto(3, "Learn SOAP", true, LocalDate.now().plusDays(15), "admin"));
    todos.add(new TodoDto(4, "Learn React", false, LocalDate.now().plusDays(15), "user2"));
  }

  public List<TodoDto> findAllByUsername(String userName) {
    Predicate<? super TodoDto> predicate = todo -> todo.userName().equalsIgnoreCase(userName);
    return todos.stream().filter(predicate).toList();
  }

  public TodoDto addTodo(String userName, String description, LocalDate targetDate, boolean done) {
    TodoDto todo = new TodoDto(5, description, done, targetDate, userName);
    todos.add(todo);
    return todo;
  }

  public void deleteById(int id) {
    Predicate<? super TodoDto> predicate = todo -> todo.id() == id;
    todos.removeIf(predicate);
  }

  public TodoDto findById(int id) {
    Predicate<? super TodoDto> predicate = todo -> todo.id() == id;
    TodoDto todo = todos.stream().filter(predicate).findFirst().get();
    return todo;
  }

  public void updateTodo(TodoDto todo) {
    deleteById(todo.id());
    todos.add(todo);
  }
}
