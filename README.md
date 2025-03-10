This instruction is on MacOS user

Task:

base url:  https://todomvc.com/examples/react/dist/

Write a feature file to automate this todoMVC website using a serenityJS playwright cucumber test framework 

refer to ~/.nvmrc to make sure you install the node version here

check your node version
node --version                                                 
v22.14.0

Step 1 Install all dependencies

```
yarn
```

Step 2: Run the test using the script defined in the package.json

```
yarn test
```

A brief overview of implementation strategy
```
Using BDD cucumber to make the test automation readable to non technical folk to encourage team collaboration
Use 3 levels of organization
1st level - feature files to describe all the possible test scenarios based on the user story
2nd level - the glue code or step definition using serenityJS screenplay pattern to allow business domain language to describe test implementation as a layer of abstraction of UI technical implementation
3rd level - the task class which is the lower technical implementation which involves your button click, etc
```








