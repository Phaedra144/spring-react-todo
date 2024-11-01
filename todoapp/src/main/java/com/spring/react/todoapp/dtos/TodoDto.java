package com.spring.react.todoapp.dtos;

import java.time.LocalDate;

public record TodoDto(int id, String description, boolean isCompleted, LocalDate targetDate, String userName) {}
