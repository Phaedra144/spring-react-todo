package com.spring.react.todoapp.dtos;

import java.time.LocalDate;

public record TodoDto(String description, boolean isCompleted, LocalDate targetDate, String userName) {}
