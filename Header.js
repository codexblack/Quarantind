import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
        View, StatusBar } from 'react-native';

export default class FAQ extends Component{
  
    render() { 
      return (
        <View style={styles.header}> 
          <Text style={{color:"white", fontSize: 22}}>{this.props.title}</Text>
        </View>
       );
    }
  }

  const styles = StyleSheet.create({
      header:{
          height: 80,
          backgroundColor: "#3499E6",
          alignItems:"center",
          justifyContent:"center",
      }
  })