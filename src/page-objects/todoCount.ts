import { By, PageElement, Text } from '@serenity-js/web'

export const todoCount = () =>
  PageElement.located(By.css('footer[data-testid=footer]'))
    .describedAs('todo status');

export const todoCountStatus = () =>
  Text.of(todoCount())                // <- Compose PageElement with question about Text
    .describedAs('number of items left to be completed')  // <- Custom description (optional)


   