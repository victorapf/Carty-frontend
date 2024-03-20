import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from "react-native";
import LoginForm from "../components/LogInClientForm";
import AntDesign from 'react-native-vector-icons/AntDesign';
import logo from  '../../assets/Carty.png'

const ClientLoginScreen =({navigation, isDarkMode})=>{
    return(
        <View style= {styles.body}> 
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', padding:15 }}>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('TypeSelection')}>
                        <AntDesign name="arrowleft" size={35} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('ClienteSignIn')} >
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            Regístrate
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{color:'white',paddingBottom:90,paddingTop:30,paddingLeft:20, fontSize: 27}}>
                        Iniciar Sesión
                    </Text>
                    <View style={styles.logIn}>
                        <Image source={logo} style={styles.logo}/>
                        <LoginForm/>
                    </View>
                </View>

                <StatusBar 
                barStyle={isDarkMode ? 'dark-content' : 'light-content'} 
                backgroundColor={isDarkMode ? 'white' : '#051249'}/>
        </View>  
    );
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: '#051249'
    },
    logIn: {
        height:600,
        backgroundColor: 'white',
        borderRadius: 40
    },
    logo:{
        width:390,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        top: 30
    }
});

export default  ClientLoginScreen;
