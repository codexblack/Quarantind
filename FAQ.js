import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
        TextInput, TouchableOpacity, View, Image } from 'react-native';
import Header from './Header'
import Accordion from './Accordion'

export default class FAQ extends Component{
  
    render() { 
      return (
      <React.Fragment>
        <Header title="FAQ"/>
        <View style={{flex:1, backgroundColor: "white", padding: 10, justifyContent:"center"}}>
         <Accordion title="What are the symptoms?"
         data="The most common symptoms of COVID-19 are fever, dry cough, and tiredness. 
          Some patients may have aches and pains, nasal congestion, sore throat or diarrhea.
           These symptoms are usually mild and begin gradually. Some people become infected but only have
            very mild symptoms.
            (Source: WHO)"/>
         <Accordion title="How does it spread?" 
         data="People can catch COVID-19 from others who have the virus. The disease spreads primarily from person to person through small droplets from the nose or mouth, which are expelled when a person with COVID-19 coughs, sneezes, or speaks. These droplets are relatively heavy, do not travel far and quickly sink to the ground. People can catch COVID-19 if they breathe in these droplets from a person infected with the virus. This is why it is important to stay at least 1 metre (3 feet) away from others. These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails. 
         People can become infected by touching these objects or surfaces, 
         then touching their eyes, nose or mouth.
         (Source: WHO)"/>
         <Accordion title="I don't feel sick. So it's impossible for me to get others sick right?"
         data="Many people with COVID-19 experience only mild symptoms. 
         This is particularly true in the early stages of the disease. 
         It is possible to catch COVID-19 from someone who has just a mild cough and does not feel ill.
         Some reports have indicated that people with no symptoms can transmit the virus. It is not yet known how often it happens.
         (Source: WHO)"/>
         <Accordion title="What is the lifespan of the virus?"
         data="Studies have shown that the COVID-19 virus can survive for up to 72 hours on plastic and stainless steel, 
         less than 4 hours on copper and less than 24 hours on cardboard.
         (Source: WHO)"/>
         <Accordion title="What are some safety precautions that we can take?"
         data="
         When grocery shopping, keep at least 1-metre distance from others 
         and avoid touching your eyes, mouth and nose. If possible, sanitize the handles of shopping 
         trolleys or baskets before shopping. Once home, wash your hands thoroughly and also 
         after handling and storing your purchased products.
         When possible maintain at least a 1 metre (3 feet) distance between yourself and others. 
         This is especially important if you are standing by someone who is coughing or sneezing. 
         Since some infected persons may not yet be exhibiting symptoms or their symptoms may be mild, 
         maintaining a physical distance with everyone is a good idea if you are in an area where COVID-19 is circulating.
         (Source: WHO)" />
         <Accordion title="Some general information about the virus" 
         data="Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). 
         The most recently discovered coronavirus causes coronavirus disease COVID-19.
         COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, 
         China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.
         (Source: WHO)"/>
      </View>
      </React.Fragment>
       );
    }
  }

  const styles = StyleSheet.create({
     
      questionCard:{
        backgroundColor: 'grey',
        marginVertical: 20 
      }
  })