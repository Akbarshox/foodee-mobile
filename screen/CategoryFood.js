import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default function CategoryFood() {
   const [category, setCategory] = useState([
      {title: 'Сеты', rating: 1, key: '1'},
      {title: 'МакКомбо', rating: 2, key: '2'},
      {title: 'Сандвичи, Роллы, Стартеры', rating: 3, key: '3'},
      {title: 'Картофель', rating: 4, key: '4'},
      {title: 'Десерты и выпечка', rating: 5, key: '5'},
      {title: 'Соусы', rating: 5, key: '66'},
   ]);
   
   return(
       <View>
          <FlatList
              data={category}
              keyExtractor={item => item.key}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                  <View style={styles.nav}>
                     <Text style={styles.title}>{item.title}</Text>
                  </View>
              )}
          />
       </View>
   )
}
const styles = StyleSheet.create({
   nav: {
      height: 50,
      backgroundColor: '#fff',
   },
   title: {
      marginHorizontal: 6,
      marginVertical: 10,
      borderRadius: 25,
      backgroundColor: '#fcc300',
      padding: 5,
   }
});