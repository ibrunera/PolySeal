import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Empresa from './pages/Empresa'

export default function Routes(){
    return(
        <NavigationContainer>
        
            <AppStack.Navigator screenOptions={{headerShown : false}}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Empresa" component={Empresa}/>
                <AppStack.Screen name="Produtos" component={Produtos}/>
            </AppStack.Navigator>

        </NavigationContainer>
    )
}