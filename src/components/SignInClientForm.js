import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { validarCampoObligatorio, mostrarAlerta, validarFormatoEmail } from "../utils/utils";
import { Formik  } from "formik";


const SignInForm = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("")
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

    //Funcion para validaciones en FRONTEND
    const handle = async () => {
        if(!validarCampoObligatorio(name) || !validarCampoObligatorio(username) || !validarCampoObligatorio(email) || !validarCampoObligatorio(password)) {
            mostrarAlerta('Error', 'Por favor complete todos los campos');
        }else if(!validarFormatoEmail(email)) {
            mostrarAlerta('Error','Por favor ingrese un correo electrónico válido')
        }else{
            console.log('Nombre:', name)
            console.log('Username:', username)
            console.log('Email:', email)
            console.log('Password:', password)

            setName('');
            setUsername('');
            setEmail('');
            setPassword('');
            setRepeatPassword('');
        } 
    }
    return(
        <View style={{top:100, paddingLeft: 30}}>
            <Formik
            initialValues={{name: '', username: '', email: '', password: '', cpassword: ''}}
            onSubmit={(values) =>{
                console.log(values)
            }}>{({handleChange, handleBlur, handleSubmit, values})=>(
                <View>
                    <TextInput 
                    style={styles.inputName}
                    placeholder="Nombre Completo"
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
                    values={values.name}
                    />
                    <TextInput 
                    style={styles.inputUsername}
                    placeholder="Usuario"
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    values={values.username}
                    />   
                    <TextInput 
                    style={styles.inputEmail}
                    placeholder="Correo Electrónico"
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    values={values.email}
                    />
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
                    </View>

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
    }
})

export default SignInForm;
