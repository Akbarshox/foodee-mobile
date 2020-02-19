import React, {useState} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {AppLoading} from "expo";
import reducers from './store/reducer/combineReducer';
import ApiFetch from "./shared/ApiFetch";
import * as Font from 'expo-font';
const store = createStore(reducers);

const getFonts = () => Font.loadAsync({
   'mukta': require('./assets/fonts/Mukta-Bold.ttf'),
   'roboto': require('./assets/fonts/RobotoSlab-VariableFont_wght.ttf')
});

export default function App() {
   const [fontsLoaded, setFontsLoaded] = useState(false)
   if(fontsLoaded){
      return (
          <Provider store={store}>
            <ApiFetch />
          </Provider>
          )
   }else{
      return <AppLoading
          startAsync={getFonts}
          onFinish={() => {setFontsLoaded(true)}}
      />
   }
}