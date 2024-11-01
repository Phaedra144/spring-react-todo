package com.spring.react.todoapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.spring.react.todoapp.dtos.TodoDto;
import com.spring.react.todoapp.service.TodoService;

@RestController("/api/v1")
public class TodoController {

  TodoService todoService;

  public TodoController(TodoService todoService) {
    this.todoService = todoService;
  }

  @GetMapping("users/{userName}/todos")
  public List<TodoDto> getAllTodos(@PathVariable String userName) {
    return todoService.findAllByUsername(userName);
  }

}
