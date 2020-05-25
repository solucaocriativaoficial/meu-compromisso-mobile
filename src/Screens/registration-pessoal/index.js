import React,{useRef, useState, useEffect} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    StatusBar,
    Platform,
} from 'react-native';
import {Form} from '@unform/mobile';
import Input from '../../Components/Form/Input';
import StyleUnique from './style';
import StyleMain from '../../Style/Main';
import StylePattern from '../../Style/StylePattern';
import { ScrollView } from 'react-native-gesture-handler';
import MessageErrors from '../../Components/errors/messageError';
import Axios from 'axios';

export default function RegistrationPessoal({navigation}){
    const formRef = useRef(null);
    const [showError, setShowError] = useState(false)
    const [messageError, setMessageError] = useState(null);
    const [cep, setCep] = useState(null);
    const [dataCep, setDataCep] = useState({});

    useEffect(() => {
        async function getDataCep(cep){
            if(cep.length === 8)
            {
                const url = `https://viacep.com.br/ws/${cep}/json/`;
                const dataCep = await Axios.get(url)
                setDataCep(dataCep.data)
            }
        }
        if(cep !== null & cep !== '' & cep !== undefined)
        getDataCep(cep)
    },[cep])


    function handleSubmit(data){
        const valuesData = Object.values(data);
        const checkEmptyData = valuesData.filter(valueField => valueField === "" || valueField === undefined)
        if(checkEmptyData.length)
        {
            setShowError(true)
            setMessageError("Todos os campos são obrigatórios")
        }        
        else
        navigation.push("RegistrationChurcAccess")
    }

    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor={StylePattern.color_primary}/>
        <MessageErrors showError={showError} openError={() => setShowError(false)} message={messageError}/>
        <ScrollView>
            <KeyboardAvoidingView style={StyleUnique.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={StyleMain.containerTitleSmall}>
                    <Text style={StyleMain.textTitleSmall}>Cadastro</Text>
                </View>
                <View style={StyleUnique.containerForm}>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <View style={StyleUnique.containerFields}>
                            <View style={StyleMain.containerTitleLarge}>
                                <Text style={[StyleMain.font, {color: StylePattern.color_green_light}]}>Informações pessoais</Text>
                            </View>
                            <Input
                                name="complete_name"
                                placeholder="Digite seu nome completo"
                                autoCapitalize="words"
                                maxLength={200}
                                placeholderTextColor={StylePattern.color_green_light}
                            />
                            <Input
                                name="mail"
                                keyboardType="email-address"
                                placeholder="Digite seu e-mail"
                                autoCapitalize="none"
                                maxLength={200}
                                placeholderTextColor={StylePattern.color_green_light}
                            />
                        </View>
                        <View style={StyleUnique.containerFields}>
                            <View style={StyleMain.containerTitleLarge}>
                                <Text style={[StyleMain.font, {color: StylePattern.color_green_light}]}>Endereço</Text>
                            </View>
                            <Input
                                name="zipcode"
                                keyboardType="numeric"
                                placeholder="CEP"
                                maxLength={8}
                                placeholderTextColor={StylePattern.color_green_light}
                                onChangeText={contentCEP => {
                                    setCep(contentCEP)
                                }}
                            />
                            <Input
                                name="address"
                                placeholder="Digite seu endereço"
                                autoCapitalize="words"
                                maxLength={255}
                                placeholderTextColor={StylePattern.color_green_light}
                            />
                            <Input
                                name="neighborhood"
                                placeholder="Digite seu bairro"
                                autoCapitalize="words"
                                maxLength={200}
                                placeholderTextColor={StylePattern.color_green_light}
                            />
                            <Input
                                name="city"
                                placeholder="Digite sua cidade"
                                maxLength={200}
                                placeholderTextColor={StylePattern.color_green_light}
                                value={dataCep.localidade || ''}
                            />
                            <Input
                                name="uf"
                                placeholder="UF"
                                autoCapitalize="characters"
                                maxLength={2}
                                placeholderTextColor={StylePattern.color_green_light}
                                value={dataCep.uf || ''}
                            />
                        </View>
                        <TouchableOpacity style={StyleUnique.btnSubmit} onPress={() => formRef.current.submitForm()}>
                            <Text style={StyleUnique.textSubmit}>Próximo</Text>
                        </TouchableOpacity>
                    </Form>
                </View>
                <View style={StyleUnique.containerLinks}>
                    <TouchableOpacity style={StyleUnique.btnLinks} onPress={()=>{
                        navigation.goBack()
                    }}>
                        <Text style={StyleUnique.btnLinksText}>Já possuo uma conta</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
        </>
    )
}