import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import { CustomTypeButton1, CustomTypeButton2 } from "../components/CustomTypeButton";
import logo from '../../assets/Carty.png';

const TypeSelectionScreen = ({navigation, isDarkMode}) =>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
            <Text style={{fontSize:25, fontWeight:700, color:'#051249'}}>¿Que modo desea usar hoy?</Text>
            <View style={{flexDirection:'row', marginTop:20}}>
                <View style={{marginRight:10}}>
                    <CustomTypeButton1
                    title="Cliente" 
                    onPress={() => navigation.navigate('ClienteLogIn')} />
                </View>

                <View style={{marginLeft:20}}>
                    <CustomTypeButton2
                    title="Tienda" 
                    onPress={() => navigation.navigate('TiendaLogIn')} />
                </View> 
            </View>
            <Image source={logo} style={styles.logo}/>

            <StatusBar 
            barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
            backgroundColor={isDarkMode ? '#051249' : 'white'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        width: 160,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        position: 'absolute'
    }
})

export default TypeSelectionScreen;