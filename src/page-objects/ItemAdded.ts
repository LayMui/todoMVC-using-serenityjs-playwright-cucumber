import { By, PageElement, Text } from '@serenity-js/web'

export const itemAdded = () =>
  PageElement.located(By.css('label[data-testid=todo-item-label]'))
    .describedAs('todo item');

export const itemNameAdded = () =>
  Text.of(itemAdded())                // <- Compose PageElement with question about Text
    .describedAs('item added')  // <- Custom description (optional)


         