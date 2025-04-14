import { By, PageElement  } from '@serenity-js/web'

export const ToDoPage = {
  newTodo: () => PageElement.located(By.id('todo-input')),

  todoList: () => PageElement.located(By.css('ul[data-testid=todo-list]')),

  itemToEdit: () => PageElement.located(By.css('.input-container')),

  todoItem: () => PageElement.located(By.css('label[data-testid=todo-item-label]')),
     
  toggleTodoByIndex: (index: number) =>
    PageElement.located(By.css(`ul.todo-list li:nth-child(${index}) .toggle[data-testid=todo-item-toggle]`)),

  todoItemByLabelText: (text: string) => 
    PageElement.located(By.xpath(`//label[@data-testid="todo-item-label"][contains(text(), "${text}")]/preceding-sibling::input[@data-testid="todo-item-toggle"]`)),

  todoItemByDestroyButtonText: (text: string) => 
    PageElement.located(By.xpath(`//div[@class="view"]//label[@data-testid="todo-item-label" and text()="${text}"]`))


}
