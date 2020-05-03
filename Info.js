import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Header from './Header'
import axios from 'axios'
class Info extends Component{
    constructor(){
        super()
        this.state={
            globalCases: "-",
            globalDeaths: "-",
            globalActives: "-",
            countryName: "Country",
            countryCases: "-",
            countryDeath: "-",
            countryActive: "-",

        }
    }

    componentDidMount(){
       axios.all([
         axios.get('https://thevirustracker.com/free-api?global=stats'),
         axios.get('https://api.thevirustracker.com/free-api?countryTotal=US')
       ])
        .then(res=>{
            this.setState({
                globalCases: res[0].data.results[0].total_cases,
                globalDeaths: res[0].data.results[0].total_deaths,
                globalActives: res[0].data.results[0].total_active_cases,
                countryName: res[1].data.countrydata[0].info.title,
                countryCases: res[1].data.countrydata[0].total_cases,
                countryDeath: res[1].data.countrydata[0].total_deaths,
                countryActive: res[1].data.countrydata[0].total_active_cases,
                
            })
            
        }, error => {throw error})

    }
  
    render() { 
      return (
          <React.Fragment>
          <Header title="Info" />
          <View style={{flex: 1,backgroundColor:"whitesmoke", justifyContent: "space-around", paddingVertical: 50}}>
              <View style={{borderWidth: 0.5,backgroundColor: "white", borderColor:'#dddddd', margin: 10, padding: 10}}>
                <Text style={{fontSize: 20, paddingVertical: 10,fontWeight: "bold"}}> Global: </Text>
                <Text style={{fontSize: 16, paddingBottom:5}}>Total Cases: {this.state.globalCases}</Text>  
                <Text style={{fontSize: 16, paddingBottom:5}}>Deaths: {this.state.globalDeaths}</Text>
                <Text style={{fontSize: 16, paddingBottom:5}}>Active Cases: {this.state.globalActives}</Text> 
              </View>

              <View style={{borderWidth: 0.5,backgroundColor:"white",borderColor:"#dddddd", margin: 10, padding: 10}}>
                <Text style={{fontSize: 20, paddingVertical: 10, fontWeight: "bold"}}> {this.state.countryName}: </Text>
                <Text style={{fontSize: 16, paddingBottom:5}}>Total Cases: {this.state.countryCases} </Text>  
                <Text style={{fontSize: 16, paddingBottom:5}}>Deaths: {this.state.countryDeath} </Text>
                <Text style={{fontSize: 16, paddingBottom:5}}>Active Cases: {this.state.countryActive}</Text> 
              </View>
          </View>
          </React.Fragment>
       );
    }
  }

  export default Info;