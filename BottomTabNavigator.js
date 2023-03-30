import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LevelScreen from '../screens/Level';
import RecipeScreen from '../screens/Recipe';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Level" component={LevelScreen}/>
                    <Tab.Screen name="Recipe" component={RecipeScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}