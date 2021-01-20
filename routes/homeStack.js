import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../src/screens/HomeScreen';
import List from '../src/screens/ListScreen';
import Header from '../src/shared/header'
import React from 'react';


const screens = {
   
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: ()=> <Header/>,
           
        }
    }, ListScreen: {
        screen : List,
        navigationOptions: {
         title: 'hello'
        }
    }

}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: 'red', height: 80}
    }
})

export default createAppContainer(HomeStack)