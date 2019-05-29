import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Splash from '../pages/Splash/Splash.screen';
import Home from '../pages/Home';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import  reducers from '../reducers';
import  ReduxThunk from 'redux-thunk';

const RouterComponent = () => {
	
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
       return(
       
        <Provider store={store}>
           <Router>
               <Stack key="root" >
               <Scene key="splash" component={Splash} title="Splash" hideNavBar={true}   />
               <Scene key="home" component={Home} title="Github Search" hideNavBar={true} initial={true}/>
            </Stack>
            </Router>
        </Provider>
     
           )
   }
export default RouterComponent;