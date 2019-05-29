import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Splash.screen.style';

export default class Splash extends Component {
    render(){
        return(
            <View style={styles.wrapper}>
                     <Text style={styles.title}> Github Search User</Text>
            </View> 
           
        );
    }
}
