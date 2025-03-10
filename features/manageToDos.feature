Feature: Manage MVC todos

  In order to manage my todos list effectively
  As a busy developer Alice
  Alice should able to add, remove and edit my todo items

  AUT: https://todomvc.com/examples/react/dist/

  Background:
    Given Alice use the todo MVC app 

  Scenario Outline: Add todo item
    When she adds item "<item>" to the list of what needs to be done
    Then she should see item added to the list to be completed
   

    Examples:
      | item          |
      | QA testing    |
      | cycling       |


@test
  Scenario Outline: Complete and remove todo item
    Given she has already added some items "<items>" in the todo list 
    When she completes each item in the list 
    Then she should see all items mark as completed
   

    Examples:
      | items                               |
      | QA testing, cycling, washing car    |
   



   
