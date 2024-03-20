import { Alert } from "react-native";

export const validarCampoObligatorio = (valor) => {
    return valor.trim() !== '';
};

export const validarFormatoEmail = (valor) => {
    // Expresión regular para verificar el formato de correo electrónico
    const formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return formatoEmail.test(valor);
};

export const mostrarAlerta = (titulo, mensaje) => {
    Alert.alert(titulo, mensaje);
};