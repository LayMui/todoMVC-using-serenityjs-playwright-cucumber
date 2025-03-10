import { By, PageElement, Text } from '@serenity-js/web'

export const clearCompletedButton = () =>
  PageElement.located(By.css('.clear-completed'))
    .describedAs('clear completed button');

