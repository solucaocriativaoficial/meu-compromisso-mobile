import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screens/login';
import RegistrationPessoal from './Screens/registration-pessoal';
import RegistrationChurcAccess from './Screens/registration-churc-access';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function Main (){
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="RegistrationPessoal" component={RegistrationPessoal}/>
                <Stack.Screen name="RegistrationChurcAccess" component={RegistrationChurcAccess}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}