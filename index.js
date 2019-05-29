/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Home from './app/pages/Home';
import {name as appName} from './app.json';
import Splash from './app/pages/Splash/Splash.screen';
import Routes from './app/navigations/Routes';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

class Main extends Component {
    constructor(props){
        super(props);
        this.state = { currentScreen: 'Splash'};
        setTimeout(()=>{
            this.setState({ currentScreen: 'Routes'})
        }, 2000)
    }
    render(){
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Routes/>
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => Main);
