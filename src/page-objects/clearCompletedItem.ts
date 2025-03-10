import { By, PageElement, Text } from '@serenity-js/web'

export const clearCompletedButton = () =>
  PageElement.located(By.css('.clear-completed'))
    .describedAs('clear completed button');

export const clearCompletedButtonWithText = () =>
  Text.of(clearCompletedButton())                // <- Compose PageElement with question about Text
    .describedAs('clear all completed tasks button')  // <- Custom description (optional)


   