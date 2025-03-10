import { Duration, Task, Wait } from '@serenity-js/core'
import { By, Enter, isVisible, PageElements, } from '@serenity-js/web'
import { ToDoPage } from '../page-objects/TodoPage'
import { Ensure, equals, includes } from '@serenity-js/assertions'
import { itemAdded, itemNameAdded } from '../page-objects/ItemAdded'


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





          
        
          
}