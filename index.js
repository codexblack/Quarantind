import { registerRootComponent } from 'expo';
import React, { Component } from 'react';

import App from './App';
import SplashScreen from './SplashScreen'
import { AppRegistry } from 'react-native';

class MainScreen extends Component {
    constructor() {
        super()
        this.state={
            currentScreen: "SplashScreen"
        };
        setTimeout(()=>{
            this.setState({
                currentScreen: "Home"
            })
        }, 2000)
    }

    render(){
        let mainScreen = this.state.currentScreen === "SplashScreen" ? <SplashScreen/> : <App/>
        return mainScreen
    }
}

AppRegistry.registerComponent('main', () => App)
