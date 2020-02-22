import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import createCSSStyleSheet from "react-native-web/dist/exports/StyleSheet/createCSSStyleSheet";

export default function InfoModal({navigation}) {
   return(
       <View style={styles.modal}>
          <Text style={styles.name}>{navigation.getParam('name')}</Text>
          <View style={styles.icon}>
             <MaterialIcons name='access-time' size={20} />
             <Text style={styles.work}>Работаем до 21:00</Text>
          </View>
          <Text style={styles.description}>{navigation.getParam('description')}</Text>
          <View style={styles.hr}/>
          <Text style={styles.executor}>Исполнитель (продавец): ООО "МАКДОНАЛДС", 115054, Москва г, Валовая ул, дом № 26, ИНН 7710044140, рег.номер 1027700251754.
             Информация о потребительских свойствах продукции доступна в ресторане и на</Text>
       </View>
   )
}

const styles = StyleSheet.create({
   modal: {
      flex: 1,
      top: 400,
      backgroundColor: '#F6F6F6',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
   },
   name: {
      color: '#000',
      fontFamily: 'roboto',
      padding: 30,
      fontSize: 28,
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
      marginVertical: 10,
      opacity: 0.5
   }
});