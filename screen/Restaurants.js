import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import InsideRestaurant from "./InsideRestaurant";
import rest from '../assets/restaurant.jpg';
import price from '../assets/price.svg';
import dot from '../assets/dot.svg';

function Restaurants({navigation}) {
   const result = useSelector(state => state.data.api);
      if(!result.length){
         return(
             <ActivityIndicator
               size='large'
               style={styles.loader}
               color="#fcc300"
             />
         )
      }else{
         return(
             <View>
                <FlatList
                    data={result}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('InsideRestaurant', item)}>
                           <View style={styles.card}>
                              <View style={styles.cardContent}>
                                 <Image source={rest} style={styles.img} />
                                 <Text style={styles.name}>{item.name}</Text>
                                 <View style={styles.icon}>
                                    <Image source={price} style={styles.price}/>
                                    <Text style={styles.minPrice}>Минимальный заказ: {item.minPrice}</Text>
                                 </View>
                                 <Text style={styles.title}><Image source={dot} style={{width: 32, height: 32}} /> {item.title}</Text>
                              </View>
                           </View>
                        </TouchableOpacity>
                    )}
                />
             </View>
         )
      }
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
   cardContent: {
      marginVertical: 10
   },
   img: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginTop: -10
   },
   name: {
      fontSize: 25,
      marginHorizontal: 20,
      marginVertical: 5,
      fontFamily: 'mukta',
   },
   icon: {
      fontSize: 25,
      marginHorizontal: 20,
      flexDirection: 'row',
   },
   price: {
      width: 30,
      height: 30,
      marginTop: -10
   },
   minPrice: {
      marginTop: -2,
      marginHorizontal: 8
   },
   title: {
      textAlign: 'right',
      fontSize: 12,
      marginHorizontal: 10,
      color: '#A8A8A3',
      marginVertical: -2
   },
   loader: {
      marginVertical: 50
   }
});

export default Restaurants