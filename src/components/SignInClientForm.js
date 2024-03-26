import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik  } from "formik";
import * as Yup from 'yup';
import YupPassword from "yup-password"; //Eliminar YupPassword

YupPassword(Yup) //Eliminar

const  validationSchema = Yup.object({
    username: Yup.string().trim().min(3, 'Nombre de usuario muy corto').required('Ingresa un nombre de usuario'),
    email: Yup.string().email('Correo no válido').required('Ingresa un correo electrónico'),
    password: Yup.string().required('Ingrese una contraseña').min(8, 'Contraseña muy corta - mínimo 8 caracteres'),
    cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Debes confirmar la contraseña'),

})
const SignInForm = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1)
    }
    
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2)
    }

    return(
        <View style={{top:100, paddingLeft: 30}}>
            <Formik
            initialValues={{username: '', email: '', password: '', cpassword: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) =>{
                console.log(values)
            }}>{({handleChange, handleBlur, handleSubmit, values, errors, touched})=>(
                <View>
                    <TextInput 
                    style={styles.inputUsername}
                    placeholder="Usuario"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    values={values.username}
                    />
                    {errors.username && touched.username ? <Text style={styles.errorTextUsername}>{errors.username}</Text> : null} 
                    <TextInput 
                    style={styles.inputEmail}
                    placeholder="Correo Electrónico"
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    values={values.email}
                    />
                    {errors.email && touched.email ? <Text style={styles.errorTextEmail}>{errors.email}</Text> : null}  
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextInput
                            style={styles.inputPassword}
                            placeholder="Contraseña"
                            onBlur={handleBlur('password')}
                            onChangeText={handleChange('password')}
                            values={values.password}
                            secureTextEntry={!showPassword1}
                            />
                            <TouchableOpacity 
                            style={{top:45, right: 50}}>
                                <AntDesign
                                name={showPassword1 ? 'eyeo': 'eye'}
                                size={25}
                                color="#333"
                                onPress={togglePasswordVisibility1}
                                />
                            </TouchableOpacity>
                        </View>
                        {errors.password && touched.password ? <Text style= {styles.errorTextPassword}>{errors.password}</Text> : null}
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextInput
                            style={styles.inputRepeatPassword}
                            placeholder=" Confirmar Contraseña"
                            onBlur={handleBlur('cpassword')}
                            onChangeText={handleChange('cpassword')}
                            values={values.cpassword}
                            secureTextEntry={!showPassword2}
                            />
                            <TouchableOpacity 
                            style={{top:60, right: 50}}>
                                <AntDesign
                                name={showPassword2 ? 'eyeo': 'eye'}
                                size={25}
                                color="#333"
                                onPress={togglePasswordVisibility2}
                                />
                            </TouchableOpacity>
                        </View>
                        {errors.cpassword && touched.cpassword ? <Text style={styles.errorTextCPassword}>{errors.cpassword}</Text> : null}
                    </View>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSubmit}>
                        <Text style={{fontSize: 20, color: 'white', left: '32%', top: 10}}>
                            Registrarse
                        </Text> 
                    </TouchableOpacity>
                </View>
            )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    inputUsername: {
        top: 15,
        width:'91%',
        height:50,
        borderColor:"#222",
        borderRadius: 30,
        paddingLeft: 20,
        backgroundColor: '#c7c7c7', 
        fontSize: 20
    },
    inputEmail:{
        top: 30,
        width:'91%',
        height:50,
        borderColor:"#222",
        borderRadius: 30,
        paddingLeft: 20,
        backgroundColor: '#c7c7c7', 
        fontSize: 20
    }, 
    inputPassword:{
        top: 45,
        width:'91%',
        height:50,
        borderColor:"#222",
        borderRadius: 30,
        paddingLeft: 20,
        backgroundColor: '#c7c7c7', 
        fontSize: 20
    }, 
    inputRepeatPassword:{
        top: 60,
        width:'91%',
        height:50,
        borderColor:"#222",
        borderRadius: 30,
        paddingLeft: 20,
        backgroundColor: '#c7c7c7', 
        fontSize: 20
    },
    button: {
        top: 60,
        width: '91%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#051249',
    },
    errorTextUsername: {
        color: 'red',
        fontSize: 14,
        paddingLeft: 15,
        marginTop:15,
        marginBottom:-15
    },
    errorTextEmail: {
        color: 'red',
        fontSize: 14,
        paddingLeft: 15,
        marginTop: 30,
        marginBottom:-30  
    },
    errorTextPassword: {
        color: 'red',
        fontSize: 14,
        paddingLeft: 15,
        marginTop:45,
        marginBottom:-45
    },
    errorTextCPassword: {
        color: 'red',
        fontSize: 14,
        paddingLeft: 15,
        marginTop:60,
        marginBottom:-60
    }
})

export default SignInForm;
