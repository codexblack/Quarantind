import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons";
import Call from './Call';
import FAQ from './FAQ';
import Info from './Info';
import Home from './Home.js'

const CallStack = createStackNavigator(); 
function CallStackScreen() {
 return (
   <CallStack.Navigator
   screenOptions={{
     headerShown:false
   }}>
    <CallStack.Screen name="Call" component={Call} />    
    <CallStack.Screen name="Video" component={Call} />
   </CallStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'FAQ') {
            iconName = focused ? 'comment' : 'comment';
          } else if (route.name === 'Info') {
            iconName = focused ? 'info' : 'info';
          } else if (route.name === 'Call') {
            iconName = focused ? 'videocam' : 'videocam';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      
tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="FAQ" component={FAQ} />
        <Tab.Screen name="Call" component={CallStackScreen}/>
        <Tab.Screen name="Info" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}