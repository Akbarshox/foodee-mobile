import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import homeStack from "./homeStack";

const RootDrawer = createDrawerNavigator({
   About: {
      screen: homeStack,
      navigationOptions: {
         title: 'Foodee'
      }
   }
});

export default createAppContainer(RootDrawer);