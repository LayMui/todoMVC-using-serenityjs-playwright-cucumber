import { Duration, Task, Wait } from '@serenity-js/core';
import { Enter, isVisible, Key, Press, Click } from '@serenity-js/web';
import { ToDoPage } from '../page-objects/TodoPage';

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 *
 * Here, the actor performs activities:
 * - wait for the input field to be visible
 * - add an item to the list
 * - complete all tasks
 *
 * This sequence of activities together means to "ManageTodo".
 */
export const ManageToDo = {
    add: (item: string) =>
        Task.where(
            `#actor add an item ${item}`,
            Wait.upTo(Duration.ofMilliseconds(50000)).until(
                ToDoPage.newTodo(),
                isVisible()
            ),
            Enter.theValue(item).into(ToDoPage.newTodo()),
            Press.the(Key.Enter).in(ToDoPage.newTodo())
        ),

    aTodoList: (items: string) => {
        const itemArray = items.split(',').map(item => item.trim());
        return Task.where(
            `#actor has added a list of items ${items}`,
            Wait.upTo(Duration.ofMilliseconds(50000)).until(
                ToDoPage.newTodo(),
                isVisible()
            ),
            ...itemArray.map(item =>
                Task.where(
                    `#actor adds item ${item}`,
                    Enter.theValue(item).into(ToDoPage.newTodo()),
                    Press.the(Key.Enter).in(ToDoPage.newTodo())
                )
            )
        );
    },

    completeAllTasks: (items: string) => {
      const itemArray = items.split(',').map(item => item.trim());

      // The main issue: Missing return statement here
      return Task.where(
          `#actor completes all tasks in the todo`,
          Wait.upTo(Duration.ofMilliseconds(50000)).until(
              ToDoPage.todoList(),
              isVisible()
          ),
          ...itemArray.map(item =>
              Task.where(
                  `#actor complete item ${item}`,
                  // Assuming todoItemByLabelText returns the toggle checkbox for the item with the specified label
                  // If it returns the label itself, you need to modify this to target the checkbox
                  Click.on(ToDoPage.todoItemByLabelText(item))
              )
          )
      );
  }
};