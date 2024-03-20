import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import cliente from '../../assets/cliente.png'
import tienda from '../../assets/tienda.png'

const CustomTypeButton1 = ({ title, onPress }) => {
    return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source= {cliente} style= {styles.imgButton}/>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    );
};

const CustomTypeButton2 = ({title, onPress}) => {
    return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source= {tienda} style= {styles.imgButton}/>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#c7c7c7',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    buttonText: {
        color: '#051249',
        fontSize: 16,
        fontWeight: 'bold'
    },
    imgButton: {
        width: 130,
        height: 120
    }
});

export { CustomTypeButton1, CustomTypeButton2 };
