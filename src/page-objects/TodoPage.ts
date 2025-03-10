import { By, PageElement  } from '@serenity-js/web'

export const ToDoPage = {
  newTodo: () => PageElement.located(By.id('todo-input')),

  todoList: () => PageElement.located(By.css('ul[data-testid=todo-list]')),

  toggleTodoByIndex: (index: number) =>
    PageElement.located(By.css(`ul.todo-list li:nth-child(${index}) .toggle[data-testid=todo-item-toggle]`)),

  todoItemByLabelText: (text: string) => 
    PageElement.located(By.xpath(`//label[@data-testid="todo-item-label"][contains(text(), "${text}")]/preceding-sibling::input[@data-testid="todo-item-toggle"]`)),

  todoItemByDestroyButtonText: (text: string) => 
    PageElement.located(By.xpath(`//div[@class="view"]//label[@data-testid="todo-item-label" and text()="${text}"]`))


}
