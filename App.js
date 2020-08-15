  import { createAppContainer } from "react-navigation";
  import { createStackNavigator } from "react-navigation-stack";
  import indexScreen from "./src/screens/indexScreen";
  import ShowScreen from "./src/screens/ShowScreen";
  import React from 'react';
  import {provider as BlogProvider} from './src/context/BlogContext'

  const navigator = createStackNavigator(
    {
    Index: indexScreen,
    Show: ShowScreen
    } ,
    {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: "Blog",
    }
  });

  const App = createAppContainer(navigator);

  export default() => {
    return (
      <BlogProvider>
        <App />
      </BlogProvider>
    );
  }