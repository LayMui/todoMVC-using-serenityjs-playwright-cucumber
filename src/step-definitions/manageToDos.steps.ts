import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight, Check, Log, notes, TakeNotes } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';
import { ManageToDo } from '../task/ManageTodo';
import { VerifyToDo } from '../task/VerifyTodo';

import { isPresent } from '@serenity-js/assertions'


/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given('{actor} use the todo MVC app', async (actor: Actor) =>
    await actor.attemptsTo(
        Navigate.to('https://todomvc.com/examples/react/dist/'),
    )
);


When('{pronoun} adds item {string} to the list of what needs to be done', async (actor: Actor, item: string) => {
    await actor.attemptsTo(
        ManageToDo.add(item),
        notes().set('item', item),
    );
});


Then('{pronoun} should see item added to the list to be completed', async(actor: Actor) => {     
    
    const item = await actor.answer(notes().get('item'));

                                                                  
     await actor.attemptsTo(
        Check.whether(notes().get('item'), isPresent())
            .andIfSo(
                VerifyToDo.isAdded(item)
            )

    );
});



Given('{pronoun} has already added some items {string} in the todo list', async (actor: Actor, items: string) =>
    actor.attemptsTo(
      ManageToDo.aTodoList(items),
      notes().set('items', items),
    )
);



When('{pronoun} completes each item in the list', async (actor: Actor) => {
    const items = await actor.answer(notes().get('items'));
    await actor.attemptsTo(
        ManageToDo.completeAllTasks(items)
    );
});



Then('{pronoun} should able to see the list is clear', async(actor: Actor) => {     
    await actor.attemptsTo(
       VerifyToDo.isCompleted("0 items left!\nAllActiveCompleted\nClear completed")
    );
   
});


When('{pronoun} clear off all items completed', async (actor: Actor) => {
    await actor.attemptsTo(
        ManageToDo.clearCompletedTask()
    );
});

Then('{pronoun} is able to see the list is now empty', async(actor: Actor) => {     
    await actor.attemptsTo(
     VerifyToDo.isEmpty()
    );
   
});


When('{pronoun} wants to remove items the todo list', async (actor: Actor) => {

    const items = await actor.answer(notes().get('items'));
    await actor.attemptsTo(
        ManageToDo.removeUnCompletedTasks(items)
    );
});



Then('{pronoun} is able to see the list is clear', async(actor: Actor) => {     
    await actor.attemptsTo(
        VerifyToDo.isCompleted("0 items left!\nAllActiveCompleted\nClear completed")
    );
   
});

