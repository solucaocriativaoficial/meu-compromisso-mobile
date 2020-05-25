import React,{useRef, useState} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import {Form} from '@unform/mobile';
import Input from '../../Components/Form/Input';
import StyleMain from '../../Style/Main';
import StyleUnique from './style';
import StylePattern from '../../Style/StylePattern';
import MessageErrors from '../../Components/errors/messageError';

export default function Login({navigation}){
    const formRef = useRef(null);
    const [showError, setShowError] = useState(false)
    const [messageError, setMessageError] = useState(null);

    function handleSubmit(data){
        const valuesData = Object.values(data);
        const checkEmptyData = valuesData.filter(valueField => valueField === "" || valueField === undefined)
        if(checkEmptyData.length)
        {
            setShowError(true)
            setMessageError("Todos os campos são obrigatórios!")
        }        
        else
        navigation.push("RegistrationChurcAccess")
    }

    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor={StylePattern.color_primary}/>
        <MessageErrors showError={showError} openError={() => setShowError(false)} message={messageError}/>
        <KeyboardAvoidingView style={[StyleMain.containerMain, StyleUnique.container]}  behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View style={StyleUnique.containerTitle}>
                <Text style={StyleMain.textTitleSmall}>Faça seu login</Text>
            </View>
            <View style={StyleUnique.containerForm}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input
                        name="mail"
                        keyboardType="email-address"
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                        placeholderTextColor={StylePattern.color_white}
                    />
                    <Input
                        name="password"
                        placeholder="Digite sua senha"
                        label="Senha"
                        secureTextEntry={true}
                        placeholderTextColor={StylePattern.color_white}
                    />
                    <TouchableOpacity style={StyleUnique.btnSubmit} onPress={() => formRef.current.submitForm()}>
                        <Text style={StyleUnique.textSubmit}>Entrar</Text>
                    </TouchableOpacity>
                </Form>
            </View>
            <View style={StyleUnique.containerLinks}>
                <TouchableOpacity style={StyleUnique.btnLinks}>
                    <Text style={StyleUnique.btnLinksText}>Esqueci minha senha!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleUnique.btnLinks} onPress={() => {
                    navigation.push('RegistrationPessoal')
                }}>
                    <Text style={StyleUnique.btnLinksText}>Criar uma conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </>
    )
}