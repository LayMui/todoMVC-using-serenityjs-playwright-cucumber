import { Duration, Task, Wait } from '@serenity-js/core'
import { By, Enter, isVisible, PageElements, } from '@serenity-js/web'
import { ToDoPage } from '../page-objects/TodoPage'
import { Ensure, equals, isFalse } from '@serenity-js/assertions'
import { itemAdded, itemNameAdded } from '../page-objects/ItemAdded'
import { todoCount, todoCountStatus } from '../page-objects/todoCount'
import { clearCompletedButton } from '../page-objects/clearCompletedItem'


/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 *
 * Here, the actor perform activities:
 * - Ensure the todo item is visible


 *
 * This sequence of activities together means to "VerifyTodo"
 */
export const VerifyToDo = {
  isAdded: (item: string) =>
    Task.where(
      `#actor verify an item ${item} is added`,
      Ensure.that(itemAdded(), isVisible()),
      Ensure.that(itemNameAdded(), equals(item))
    
    ),

    isCompleted: (actualText: string) => 
       
     Task.where(
        `#actor verify task completion`,
        Ensure.that(todoCountStatus(), equals(actualText))
      ),

      isEmpty: () => 
        Task.where(
           `#actor verify list is empty`,
           Ensure.that(clearCompletedButton().isPresent(), isFalse()),
         )
};