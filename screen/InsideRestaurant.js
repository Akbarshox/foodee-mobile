import React from 'react';
import {View, Text, FlatList, Image, StyleSheet, ScrollView, YellowBox, ActivityIndicator} from 'react-native';
import burger from '../assets/burger.jpeg';
import {GlobalStyles} from "../style/GlobalStyles";

export default function InsideRestaurant({food, navigation}) {
   YellowBox.ignoreWarnings([
      'VirtualizedLists should never be nested', // TODO: Remove when fixed
   ]);
   if(!food.length){
      return(
          <ActivityIndicator
              size='large'
              style={GlobalStyles.loader}
              color="#fcc300"
          />
      )
   }else {
      return (
          <View>
             <ScrollView>
                <FlatList
                    data={food}
                    keyExtractor={(item, index) => String(index)}
                    horizontal={false}
                    contentContainerStyle={GlobalStyles.list}
                    numColumn={2}
                    renderItem={({item}) => (
                        <View style={GlobalStyles.card}>
                           <Image source={burger} style={GlobalStyles.img}/>
                           <Text style={GlobalStyles.name}>{item.name}</Text>
                           <Text style={GlobalStyles.price}>{item.price} UZS</Text>
                        </View>
                    )}
                />
                <FlatList
                    data={food}
                    keyExtractor={(item, index) => String(index)}
                    horizontal={false}
                    contentContainerStyle={GlobalStyles.list}
                    numColumn={2}
                    renderItem={({item}) => (
                        <View style={GlobalStyles.card}>
                           <Image source={burger} style={GlobalStyles.img}/>
                           <Text style={GlobalStyles.name}>{item.name}</Text>
                           <Text style={GlobalStyles.price}>{item.price} UZS</Text>
                        </View>
                    )}
                />
                <FlatList
                    data={food}
                    keyExtractor={(item, index) => String(index)}
                    horizontal={false}
                    contentContainerStyle={GlobalStyles.list}
                    numColumn={2}
                    renderItem={({item}) => (
                        <View style={GlobalStyles.card}>
                           <Image source={burger} style={GlobalStyles.img}/>
                           <Text style={GlobalStyles.name}>{item.name}</Text>
                           <Text style={GlobalStyles.price}>{item.price} UZS</Text>
                        </View>
                    )}
                />
                <FlatList
                    data={food}
                    keyExtractor={(item, index) => String(index)}
                    horizontal={false}
                    contentContainerStyle={GlobalStyles.list}
                    numColumn={2}
                    renderItem={({item}) => (
                        <View style={GlobalStyles.card}>
                           <Image source={burger} style={GlobalStyles.img}/>
                           <Text style={GlobalStyles.name}>{item.name}</Text>
                           <Text style={GlobalStyles.price}>{item.price} UZS</Text>
                        </View>
                    )}
                />
             </ScrollView>
          </View>
      )
   }
}