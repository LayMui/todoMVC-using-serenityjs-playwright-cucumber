import { Duration, Task, Wait } from '@serenity-js/core';
import { Enter, isVisible, Key, Press, Click, Hover, DoubleClick, Clear } from '@serenity-js/web';
import { ToDoPage } from '../page-objects/TodoPage';
import { clearCompletedButton } from '../page-objects/clearCompletedItem';

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

    addTodoList: (item: string) => 
        Task.where(
            `#actor add item ${item} to the list`,
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

      return Task.where(
          `#actor completes all tasks in the todo`,
          Wait.upTo(Duration.ofMilliseconds(50000)).until(
              ToDoPage.todoList(),
              isVisible()
          ),
          ...itemArray.map(item =>
              Task.where(
                  `#actor complete item ${item}`,
                  Click.on(ToDoPage.todoItemByLabelText(item))
              )
          )
      );
  },

  clearCompletedTask: () =>
    Task.where(
        `#actor clear off all completed tasks`,
        Wait.upTo(Duration.ofMilliseconds(50000)).until(
           clearCompletedButton(),
            isVisible()
        ),
        Click.on(clearCompletedButton())
       
    ),



    removeUnCompletedTasks: (items: string) => {
      const itemArray = items.split(',').map(item => item.trim());

      return Task.where(
          `#actor removes all uncompleted tasks in the todo`,
          Wait.upTo(Duration.ofMilliseconds(50000)).until(
              ToDoPage.todoList(),
              isVisible()
          ),
          ...itemArray.map(item =>
              Task.where(
                  `#actor complete item ${item}`,
                  Click.on(ToDoPage.todoItemByLabelText(item)),
                  //Hover.over(ToDoPage.todoItemByLabelText(item)),
                  Click.on(ToDoPage.todoItemByDestroyButtonText(item)),

                
              )
          ),
          
      );
  },


  addCompletedTask: (numOfItem: number) =>
    Task.where(
        `#actor complete ${numOfItem} task`,
        Wait.upTo(Duration.ofMilliseconds(50000)).until(
            ToDoPage.todoList(),
            isVisible()
        ),
        Click.on(ToDoPage.toggleTodoByIndex(numOfItem)),
       
    ),

    editTask: (item: string) =>
        Task.where(
            `#actor edit an item ${item}`,
            Wait.upTo(Duration.ofMilliseconds(50000)).until(
                ToDoPage.itemToEdit(),
                isVisible()
            ),
            DoubleClick.on(ToDoPage.itemToEdit()),
           
            Enter.theValue(item).into(ToDoPage.todoItem()),
            Press.the(Key.Enter).in(ToDoPage.itemToEdit())
        ),

};