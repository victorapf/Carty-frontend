import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

const LoginForm = () => {
    return (
        <View style={{top:140, paddingLeft: 30}}>
            <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values)=>{
                console.log(values)
            }}
            >{({handleChange, handleBlur, handleSubmit, values})=>(
                <View>
                    <TextInput 
                    style={styles.inputUsername}
                    placeholder="Usuario"
                    placeholderTextColor={'grey'}
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    values={values.username}
                    />
                    
                    <TextInput
                    style={styles.inputPassword}
                    placeholder="Contraseña"
                    placeholderTextColor={'grey'}
                    values={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry={true}
                    />

                    <TouchableOpacity >
                        <Text style={{fontSize:14, color:'black', left:'54%', top:25}}>
                            Olvidé mi contraseña
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSubmit}
                    title="Login">
                        <Text style={{fontSize: 20, color: 'white', left: '32%', top: 10}}>
                            Iniciar Sesión
                        </Text> 
                    </TouchableOpacity>
                </View>
            )}
            </Formik>
    </View>
    );


}

const styles = StyleSheet.create({
    inputUsername:{
      width:'91%',
      height:50,
      borderColor:"#222",
      borderRadius: 30,
      paddingLeft: 20,
      backgroundColor: '#c7c7c7', 
      fontSize: 20
    },
    inputPassword:{
      top: 15,
      width:'91%',
      height:50,
      borderColor:"#222",
      borderRadius: 30,
      paddingLeft: 20,
      backgroundColor: '#c7c7c7',
      fontSize: 20
    },
    button: {
      top: 40,
      width: '91%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#051249',
    }
})

export default LoginForm;
