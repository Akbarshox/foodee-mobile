import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function InfoModal({navigation}) {
   return(
       <View style={styles.modal}>
          <View style={styles.stick}/>
          <Text style={styles.name}>{navigation.getParam('name')}</Text>
          <View style={styles.icon}>
             <MaterialIcons name='access-time' size={20} />
             <Text style={styles.work}>Режим работы:  с 10:00 до 23:00 часов.</Text>
          </View>
          <Text style={styles.description}>{navigation.getParam('description')}</Text>
          <View style={styles.hr}/>
          <Text style={styles.executor}>Исполнитель (продавец): Street 77 порадует бургерами на любой вкус. Даже самые привередливые гурманы найдут что-то для своего избалованного вкуса.</Text>
       </View>
   )
}

const styles = StyleSheet.create({
   modal: {
      flex: 1,
      top: 400,
      backgroundColor: '#E8E7E7',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
   },
   name: {
      color: '#000',
      fontFamily: 'roboto',
      padding: 30,
      fontSize: 28,
      marginVertical: -10
   },
   work: {
     marginHorizontal: 5
   },
   description: {
      fontSize: 13,
      padding: 10
   },
   hr: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      opacity: 0.2,
      marginHorizontal: 10
   },
   icon: {
      flexDirection: 'row',
      marginHorizontal: 10,
      opacity: 0.5
   },
   executor: {
      padding: 15,
      marginVertical: 5,
      opacity: 0.5
   },
   stick: {
      borderBottomColor: '#fff',
      borderBottomWidth: 7,
      marginHorizontal: 150,
      marginVertical: 10,
      borderRadius: 20,
      elevation: 1
   }
});