import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import agora from './agora.png'
import requestCameraAndAudioPermission from './permissions'

export default class Call extends Component{
    
    constructor(props){
        super(props)
        this.state = {                 
            ChannelName: 's',                                  
          };
          if (Platform.OS === 'android') {                    
            requestCameraAndAudioPermission().then(_ => {
              console.log('requested!');
            });
        }
    }

    handleChange = e => {
        const {value} = e.target;
        this.setState({
            ChannelName: value
        })

    }

    handleSubmit = () => {
        
    }
  
    render() { 
      return (
      <View style={styles.container}>
          <View>
          <Text style={{fontSize:15, color:"white"}}>Powered by:</Text>
          <Image source={agora}/>
          </View>
          
          <View style={styles.formContainer}>
            <TextInput 
            placeholderTextColor="white" 
            selectionColor="white"
            placeholder="Channel"
            style={{color:"whitesmoke"}}
            onChange={this.handleChange}/>
          </View>
          <TouchableOpacity style={{alignItems: "center",
                                    padding: 10,
                                    backgroundColor: "#036CBC",
                                    
                                   
                                        }} onPress={this.handleSubmit}>
            <Text style={{color:"white",}}>Start Call</Text>
          </TouchableOpacity>
        </View>
       );
    }
  }

  const styles = StyleSheet.create({
      container:{
          flex:1,
          backgroundColor: "#3499E6",
          paddingTop: 80,
          paddingHorizontal:15,
          justifyContent: "space-around"
      },
      formContainer:{
          paddingHorizontal:10,
          backgroundColor:"rgba(255,255,255,0.2)",
          height: 40,
          justifyContent: "center",
      }
  })