import * as React from 'react';
import { View, Image, Text } from 'react-native';

import Logo from './virus.png'


export default function SplashScreen() {
  return (
    <View style={{backgroundColor:'#E7615D',flex:1}}>
      <View style={{flexGrow: 1, justifyContent:"center", alignItems:"center"}}>
      <Image source={Logo}></Image>
      <Text style={{fontWeight:"600",fontSize:30, color:"whitesmoke"}}>Quarantin'd</Text>
      </View>
    </View>
  );
}
