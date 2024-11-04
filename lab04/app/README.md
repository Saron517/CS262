What React construct is used to implement separate pages of an application (cf. separate webpages on the Web)?
In React, we use something called navigators to set up separate pages or screens in an app, similar to having different web pages. For example, a stack navigator lets you go back and forth between screens, like a web browser’s back and forward buttons.
What is the React Navigation concept that is analogous to a URL/URI on the Web?
In React Navigation (a library for navigation in React), each screen has a route name. This route name acts like a URL on the Web. It identifies the screen so we can tell the app where to go.
The onPress event handler for the home screen component is specified as () => navigation.navigate('Details'). Can we just say navigation.navigate('Details')? Why or why not?
When we write onPress={() => navigation.navigate('Details')}, the arrow function () => makes sure that navigation.navigate('Details') only runs when you actually press the button. If we just wrote onPress={navigation.navigate('Details')}, it would try to navigate as soon as the app loads, not when you press the button. So, using () => delays it until the button is clicked.

## additional 
How the hard-coded movie list is presented as a list of titles on the homepage:
The HomeScreen component has a hard-coded list of movies in reviews. It uses FlatList to display each movie title by looping through reviews and creating a TouchableOpacity for each title. This makes each title clickable, allowing users to tap and navigate to a details page.

How the details screen presents the details of a single movie:
The DetailsScreen component receives the movie details (title, rating, description) through route.params, which was passed from the Home screen when a title was tapped. It then displays each piece of information in separate Text elements, showing the full details of the selected movie