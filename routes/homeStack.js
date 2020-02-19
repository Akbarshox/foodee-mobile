import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Home from '../screen/Home';
import Icon from "./Header";
import ApiFood from "../shared/ApiFood";

const screens = {
   Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
         title: 'Header',
         headerLeft: () => <Icon navigation={navigation} />,
         headerStyle: {backgroundColor: '#fcc300'}
      })
   },
   InsideRestaurant: {
      screen: ApiFood,
      navigationOptions: ({navigation}) => ({
         title: navigation.getParam('name'),
         headerStyle: {backgroundColor: '#fcc300'},
         headerShown: false,
      }),
   }
};
const Hstack = createStackNavigator(screens, {defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: { borderBottomWidth: 0, elevation: 0}
}});

export default Hstack;