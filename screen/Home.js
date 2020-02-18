import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Restaurants from "./Restaurants";

export default function Home({navigation}){
   return(
       <View>
          <StatusBar backgroundColor="#DCAA00" barStyle="light-content" />
          <Restaurants navigation={navigation} />
       </View>
   )
}