this lab is based on

hacks that I use
not much of a hack just had to do it all over again cause my machine was acting up

#lab questions

What does the main component function in this application return? The main component function typically returns JSX, which is the structure of the UI; it could include core components like View, Text, or custom components that define how the app will look on the screen.

What is the value of using core components? Note that these components are not standard ReactJS components. They provide essential building blocks that are optimized for mobile platforms and offer consistent styling and behavior across iOS and Android, unlike standard ReactJS components which are web-focused.

Do you see any of the technologies from last unit’s guide that are used here to specify the styling of the application? Yes, styles in this application are likely specified using StyleSheet objects in React Native, which is similar to CSS but tailored for mobile, as discussed in the last unit’s guide.

How are curly braces ({}) used in the JSX code. Curly braces are used in JSX to embed JavaScript expressions within the HTML-like structure, allowing you to insert variables, functions, or logic directly into the rendered content

What is the purpose of the asynchronous (async) methods? Asynchronous methods are used to perform tasks that take time, like fetching data from a server, without blocking the main thread, ensuring the application remains responsive to user interactions.

Does this application code use hooks? If so, explain where; if not, explain why not. no it does not becasue there are not functions like useState or useEffect to manage state and side effects

Identify one anonymous function in the code. the "onPress={() => console.log('Button pressed')}," where the function does not have a name and is defined inline.