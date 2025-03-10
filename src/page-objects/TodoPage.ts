import { By, PageElement  } from '@serenity-js/web'

export const ToDoPage = {
  newTodo: () => PageElement.located(By.id('todo-input')),


  todoList: () =>   PageElement.located(By.css('ul[data-testid=todo-list]')),


  destroyTodo: () =>
    PageElement.located(By.css('button[data-testid=todo-item-button]')),

  toggleTodo: () =>
    PageElement.located(By.css('button[data-testid=todo-item-toggle]')),

  labelTodo: () =>
    PageElement.located(By.css('label[data-testid=todo-item-label]')),

 todoItemByLabelText: (text: string) => 
 PageElement.located(By.xpath(`//label[@data-testid="todo-item-label"][contains(text(), "${text}")]/preceding-sibling::input[@data-testid="todo-item-toggle"]`)),

 todoItemByDestroyButtonText: (text: string) => 
  PageElement.located(By.xpath(`//div[@class="view"]//label[@data-testid="todo-item-label" and text()="${text}"]`))


}
