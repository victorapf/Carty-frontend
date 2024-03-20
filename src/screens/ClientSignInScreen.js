import React from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Image } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import logo from  '../../assets/Carty.png';
import SignInForm from "../components/SignInClientForm";



const ClientSignInScreen = ({isDarkMode, navigation}) => {
    return (
        <View style={styles.body}>
            <View style={{ paddingLeft: 15, paddingTop: 15, paddingBottom: 40 }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('ClienteLogIn')}>
                    <AntDesign name="arrowleft" size={35} color="white"/>
                </TouchableOpacity>
            </View>

            <View style={styles.signIn}>
                <Image source={logo} style={styles.logo}/>
                <SignInForm/>
            </View>

            <StatusBar 
            barStyle={isDarkMode ? 'dark-content' : 'light-content'} 
            backgroundColor={isDarkMode ? 'white' : '#051249'}/>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#051249',
    },
    signIn: {
        height:700,
        backgroundColor: 'white',
        borderRadius: 40
    },
    logo:{
        width:360,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
    }
})

export default ClientSignInScreen;

