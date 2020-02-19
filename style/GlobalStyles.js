import {StyleSheet} from 'react-native';

export const GlobalStyles = StyleSheet.create({
   text: {
      color: '#fc3300'
   },
   card: {
      flex: 1,
      margin: 5,
      minWidth: 170,
      maxWidth: 223,
      height: 240,
      maxHeight:304,
      backgroundColor: '#fff',
      borderRadius: 15,
      marginVertical: 10
   },
   img: {
      width: '100%',
      height: 150,
      borderRadius: 15
   },
   list: {
      justifyContent: 'center',
      flexDirection: 'row',
   },
   name: {
      fontSize: 18,
      opacity: 0.6,
      fontFamily: 'roboto',
      marginHorizontal: 5
   },
   price: {
      marginVertical: 30,
      marginHorizontal: 5,
      opacity: 0.6
   },
   loader: {
      marginVertical: 50
   },
   cardTitle: {
      width: '100%',
   },
   title: {
      position: 'absolute',
      marginHorizontal: 55,
      marginVertical: 25,
      borderRadius: 15,
      elevation: 2,
      backgroundColor: '#fff',
      shadowColor: '#333',
      shadowOpacity: 0.8,
      shadowRadius: 2,
      padding: 6,
   },
   i: {
      alignSelf: 'flex-end',
      marginHorizontal: 70,
      width: 25,
      height: 25,
   }
});