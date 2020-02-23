import React, { useState } from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {Text, View, StyleSheet, Platform, Animated, ScrollView, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import InsideRestaurant from "./InsideRestaurant";
import {GlobalStyles} from "../style/GlobalStyles";
import InfoModal from "./Modals/InfoModal";
import CategoryFood from "./CategoryFood";

const HEADER_MIN_HEIGHT = 55;
const HEADER_MAX_HEIGHT = 200;

export default function AnimatedNav({navigation, food}) {
   
   const [scrollYAnimatedValue] = useState(new Animated.Value(0));
   const [openModal, closeModal] = useState(false);
      const headerHeight = scrollYAnimatedValue.interpolate(
          {
             inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
             outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
             extrapolate: 'clamp'
          });
      const categoryHeight = scrollYAnimatedValue.interpolate(
       {
          inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
          outputRange: [200, HEADER_MIN_HEIGHT],
          extrapolate: 'clamp'
       });
      const headerBackgroundColor = scrollYAnimatedValue.interpolate(
          {
             inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
             outputRange: ['#fff', '#fcc300'],
             extrapolate: 'clamp'
          });
      const headerOpacity = scrollYAnimatedValue.interpolate({
         inputRange: [0, HEADER_MIN_HEIGHT],
         outputRange: [1, 0],
         extrapolate: 'clamp'
      });
      const headerSize = scrollYAnimatedValue.interpolate({
         inputRange: [0, HEADER_MIN_HEIGHT],
         outputRange: [33, 22],
         extrapolate: 'clamp'
      });
      const headerSpace = scrollYAnimatedValue.interpolate({
         inputRange: [0, HEADER_MIN_HEIGHT],
         outputRange: [30, 55],
         extrapolate: 'clamp'
      });
      return (
          <View style={styles.container}>
             <ScrollView
                 contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
                 scrollEventThrottle={16}
                 onScroll={Animated.event(
                     [{ nativeEvent: { contentOffset: { y: scrollYAnimatedValue } } }]
                 )}>
                <View style={{marginVertical: 50}}>
                  <InsideRestaurant food={food} navigation={navigation} />
                </View>
             </ScrollView>
   
             <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor }]}>
                <TouchableOpacity  style={styles.back} onPress={() => {navigation.goBack()}}>
                   <MaterialIcons name='arrow-back' size={30} />
                </TouchableOpacity>
                <Animated.Text style={[styles.headerText, {fontSize: headerSize, marginHorizontal: headerSpace}]}>
                   {navigation.getParam('name')}
                </Animated.Text>
                <View>
                   <Modal isVisible={openModal}
                          onBackdropPress={() => closeModal(false)} backdropOpacity={0.55}
                          useNativeDriver={true} style={{ margin: 0 }} backdropTransitionInTiming={600}
                   >
                      <InfoModal navigation={navigation} />
                   </Modal>
                </View>
                <Animated.Text  onPress={() => closeModal(true)} style={[GlobalStyles.i, {zIndex: 1, opacity: headerOpacity}]}>i</Animated.Text>
                <Animated.View style={[styles.cardTitle, { zIndex: 1, opacity: headerOpacity }]}>
                   <Text style={GlobalStyles.title}>{navigation.getParam('title')}</Text>
                </Animated.View>
             </Animated.View>
             <Animated.View style={[styles.animatedHeaderContainer, { marginTop: categoryHeight }]}>
               <CategoryFood />
             </Animated.View>
          </View>
      );
}

const styles = StyleSheet.create({
       container: {
          flex: 1,
          justifyContent: "center",
       },
       animatedHeaderContainer: {
          position: 'absolute',
          top: (Platform.OS === 'ios') ? 20 : 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
       },
       headerText: {
          position: 'absolute',
          color: '#000',
          fontFamily: 'roboto',
          width: 230
       },
       itemText: {
          color: 'black',
          fontSize: 16,
       },
       back: {
          position: 'absolute',
          top: 14,
          left: 7,
       }
    });