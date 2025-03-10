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


  Scenario Outline: Complete all the todo items
    Given she has already added some items "<items>" in the todo list 
    When she completes each item in the list 
    Then she is able to see the list is clear
    When she clear off all items completed
    And she is able to see the list is now empty
   

    Examples:
      | items                               |
      | QA testing, cycling, washing car    |
   


    Scenario Outline: Able to remove all items individually
    Given she has already added some items "<items>" in the todo list 
    When she wants to remove items the todo list
    Then she is able to see the list is clear
   
    Examples:
      | items                               |
      | QA testing, cycling, washing car    |


 Scenario Outline: Able to filter out all the completed tasks
    Given she has already added <number_of_items_added> items in the todo list 
    When she wants to mark <number_completed_items> todo item as completed
    Then she is able to see <number_of_active_items> left
   
    Examples:
      | number_of_items_added          | number_completed_items | number_of_active_items |
      | 4                              | 1                      |  3                     |
