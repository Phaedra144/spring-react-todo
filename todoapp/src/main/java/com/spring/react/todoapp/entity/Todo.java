package com.spring.react.todoapp.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "todos")
public class Todo {

  @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String description;
  private boolean isCompleted;
  private LocalDate targetDate;
  private String userName;

  public Todo() {
  }

  public Todo(int id, String description, boolean isCompleted, LocalDate targetDate, String userName) {
    this.id = id;
    this.description = description;
    this.isCompleted = isCompleted;
    this.targetDate = targetDate;
    this.userName = userName;
  }

  public int getId() {
    return id;
  }

  public String getDescription() {
    return description;
  }

  public boolean isCompleted() {
    return isCompleted;
  }

  public LocalDate getTargetDate() {
    return targetDate;
  }

  public String getUserName() {
    return userName;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setCompleted(boolean isCompleted) {
    this.isCompleted = isCompleted;
  }

  public void setTargetDate(LocalDate targetDate) {
    this.targetDate = targetDate;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  @Override
  public String toString() {
    return "Todo [id=" + id + ", description=" + description + ", isCompleted=" + isCompleted + ", targetDate="
        + targetDate + ", userName=" + userName + "]";
  }

}
