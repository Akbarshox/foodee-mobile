import React, { useState } from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {Text, View, StyleSheet, Platform, Animated, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import Modal from "react-native-modal";
import InsideRestaurant from "./InsideRestaurant";
import {GlobalStyles} from "../style/GlobalStyles";
import InfoModal from "./Modals/InfoModal";

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
      const deviceWidth = Dimensions.get("window").width;
      const deviceHeight = Dimensions.get("window").height;
      return (
          <View style={styles.container}>
             <ScrollView
                 contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
                 scrollEventThrottle={16}
                 onScroll={Animated.event(
                     [{ nativeEvent: { contentOffset: { y: scrollYAnimatedValue } } }]
                 )}>
                <InsideRestaurant food={food} navigation={navigation} />
             </ScrollView>
   
             <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor }]}>
                <TouchableOpacity  style={styles.back} onPress={() => {navigation.goBack()}}>
                   <MaterialIcons name='arrow-back' size={30} />
                </TouchableOpacity>
                <Animated.Text style={[styles.headerText, {fontSize: headerSize, marginHorizontal: headerSpace}]}>
                   {navigation.getParam('name')}
                </Animated.Text>
                <View>
                   <Modal isVisible={openModal} deviceWidth={deviceWidth} deviceHeight={deviceHeight}
                          onBackdropPress={() => closeModal(false)} backdropOpacity={0.55}
                          useNativeDriver={true} style={{ margin: 0 }} backdropTransitionInTiming={600}
                   >
                      <InfoModal navigation={navigation} />
                   </Modal>
                </View>
                <TouchableOpacity onPress={() => closeModal(true)}>
                  <Animated.Text style={[GlobalStyles.i, {zIndex: 1, opacity: headerOpacity}]}>i</Animated.Text>
                </TouchableOpacity>
                <Animated.View style={[styles.cardTitle, { zIndex: 1, opacity: headerOpacity }]}>
                   <Text style={GlobalStyles.title}>{navigation.getParam('title')}</Text>
                </Animated.View>
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