import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import burger from '../assets/burger.jpeg';

export default function InsideRestaurant({food}) {
   return (
       <View>
          <FlatList
              data={food}
              keyExtractor={(item, index) => String(index)}
              renderItem={({item}) => (
                  <View style={styles.card}>
                     <Image source={burger} style={styles.img}/>
                     <Text style={styles.name}>{item.name}</Text>
                     <Text style={styles.price}>{item.price}</Text>
                  </View>
              )}
          />
       </View>
   )
}
const styles = StyleSheet.create({
   card: {
      borderRadius: 10,
      elevation: 3,
      backgroundColor: '#fff',
      shadowColor: '#333',
      shadowOpacity: 0.8,
      shadowRadius: 2,
      marginHorizontal: 17,
      marginVertical: 7,
   },
   img: {
      width: '100%',
   }
});