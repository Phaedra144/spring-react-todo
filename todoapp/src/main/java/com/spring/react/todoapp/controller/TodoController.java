package com.spring.react.todoapp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.react.todoapp.dtos.TodoDto;
import com.spring.react.todoapp.service.TodoService;

@RestController
@RequestMapping("/api/v1")
public class TodoController {

  TodoService todoService;

  public TodoController(TodoService todoService) {
    this.todoService = todoService;
  }

  @GetMapping("/basicauth")
  public String getBasicAuthentication() {
    return "Success";
  }

  @GetMapping("users/{userName}/todos")
  public List<TodoDto> getAllTodos(@PathVariable String userName) {
    return todoService.findAllByUsername(userName);
  }

  @GetMapping("users/{userName}/todos/{id}")
  public TodoDto getTodoById(@PathVariable String userName, @PathVariable int id) {
    return todoService.findById(id);
  }

  @DeleteMapping("users/{userName}/todos/{id}")
  public void deleteTodoById(@PathVariable String userName, @PathVariable int id) {
    todoService.deleteById(id);
  }

  @PutMapping("users/{userName}/todos/{id}")
  public TodoDto updateTodoItem(@PathVariable String userName, @PathVariable int id,
      @RequestBody TodoDto todo) {
    todoService.updateTodo(todo);
    return todoService.findById(id);
  }

  @PostMapping("users/{userName}/todos")
  public ResponseEntity<TodoDto> postMethodName(@RequestBody TodoDto todo) {
    TodoDto todoResponse = todoService.addTodo(todo.userName(), todo.description(),
        todo.targetDate(), todo.isCompleted());
    return new ResponseEntity<>(todoResponse, HttpStatus.CREATED);
  }

}
