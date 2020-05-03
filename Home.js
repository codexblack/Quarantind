import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, BackHandler } from 'react-native';
import Curve from './curve.png'
import Header from './Header'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Home extends Component{
  
    render() { 
      return (
        <React.Fragment>
          <Header>

          </Header>
      <View style={styles.container} >

        <Image source={Curve}/>
        
        <Text>Stay at home.</Text>
        
        <Text>Help us flatten the curve!</Text>
      </View>
      </React.Fragment>
       );
    }
  }
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    }
})