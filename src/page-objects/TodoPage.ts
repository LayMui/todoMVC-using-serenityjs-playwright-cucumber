import { By, PageElement  } from '@serenity-js/web'

export const ToDoPage = {
  newTodo: () => PageElement.located(By.id('todo-input')),


  todoList: () =>   PageElement.located(By.css('ul[data-testid=todo-list]')),
  todoItem: () =>   PageElement.located(By.css('li[data-testid=todo-item]')),

  destroyTodo: () =>
    PageElement.located(By.css('button[data-testid=todo-item-button]')),

  toggleTodo: () =>
    PageElement.located(By.css('button[data-testid=todo-item-toggle]')),

  labelTodo: () =>
    PageElement.located(By.css('label[data-testid=todo-item-label]')),

 todoItemByLabelText: (text: string) => 
    PageElement.located(By.cssContainingText('[data-testid="todo-item-toggle"]', text))


}
