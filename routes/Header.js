import React  from 'react';
import {TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Icon({navigation}) {
   return(
       <TouchableOpacity>
          <MaterialIcons name='menu' size={30} style={{marginLeft: 10}}
             onPress={() => {navigation.openDrawer()}}/>
       </TouchableOpacity>
   )
}
