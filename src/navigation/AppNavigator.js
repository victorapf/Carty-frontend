import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TypeSelectionScreen from '../screens/TypeSelectionScreen';
import ClientLogInScreen from '../screens/ClientLogInScreen';
import ClientSignInScreen from '../screens/ClientSignInScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="TypeSelection" component={TypeSelectionScreen}/>
        <Stack.Screen name="Regresar" component={TypeSelectionScreen}/>
        <Stack.Screen name="ClienteLogIn" component={ClientLogInScreen}/>
        <Stack.Screen name="ClienteSignIn" component={ClientSignInScreen}/>
        </Stack.Navigator>
    );
}

export default AppNavigator;
