import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import { Formik  } from "formik";

const  validationSchema = Yup.object({
    name: Yup.string().trim().min(3, 'Nombre muy corto').required('Ingresa tu nombre completo'),
    username: Yup.string().trim().min(3, 'Nombre de usuario muy corto').required('Ingresa un nombre de usuario'),
    email: Yup.string().email('Correo no válido').required('Ingresa un correo electrónico'),
    password: Yup.string().trim().min(6, 'Contraseña muy corta').required('Ingresa una contraseña'),
    cpassword: Yup.string().trim().equals([Yup.ref('password'), null], 'Las contraseñas no coinciden ').required('Confirma la contraseña')
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
    
    const handlePasswordChange1 = (text) => {
        setPassword(text);
    }
    
    const handlePasswordChange2 = (text) => {
        setRepeatPassword2(text);
    };

    return(
        <View style={{top:100, paddingLeft: 30}}>
            <Formik
            initialValues={{name: '', username: '', email: '', password: '', cpassword: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) =>{
                console.log(values)
            }}>{({handleChange, handleBlur, handleSubmit, values, errors, touched})=>(
                <View>
                    <TextInput 
                    style={styles.inputName}
                    placeholder="Nombre Completo"
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
                    values={values.name}
                    />
                    {errors.name && touched.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
                    <TextInput 
                    style={styles.inputUsername}
                    placeholder="Usuario"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    values={values.username}
                    />
                    {errors.username && touched.username ? <Text style={styles.errorText2}>{errors.username}</Text> : null} 
                    <TextInput 
                    style={styles.inputEmail}
                    placeholder="Correo Electrónico"
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    values={values.email}
                    />
                    {errors.email && touched.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}  
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
                        style={{top:45, right: 50}}
                        onPress={handlePasswordChange1}>
                            <AntDesign
                            name={showPassword1 ? 'eyeo': 'eye'}
                            size={25}
                            color="#333"
                            onPress={togglePasswordVisibility1}
                            />
                        </TouchableOpacity>
                        {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
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
                            style={{top:60, right: 50}}
                            onPress={handlePasswordChange2}>
                                <AntDesign
                                name={showPassword2 ? 'eyeo': 'eye'}
                                size={25}
                                color="#333"
                                onPress={togglePasswordVisibility2}
                                />
                            </TouchableOpacity>
                        </View>
                        {errors.cpassword && touched.cpassword ? <Text style={styles.errorText}>{errors.cpassword}</Text> : null}
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
    inputName: {
        width:'91%',
        height:50,
        borderColor:"#222",
        borderRadius: 30,
        paddingLeft: 20,
        backgroundColor: '#c7c7c7', 
        fontSize: 20
    }, 
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
        top: 75,
        width: '91%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#051249',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        paddingLeft: 15,
    },
    errorText2: {
        color: 'red',
        fontSize: 14,
        paddingLeft: 15,
        marginTop: 30
    }
})

export default SignInForm;
