import React,{useRef} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    StatusBar,
    Platform,
    FlatList,
} from 'react-native';
import {Form} from '@unform/mobile';
import Input from '../../Components/Form/Input';
import StyleUnique from './style';
import StyleMain from '../../Style/Main';
import StylePattern from '../../Style/StylePattern';
import { ScrollView } from 'react-native-gesture-handler';

export default function RegistrationChurcAccess({navigation}){
    const formRef = useRef(null);

    function handleSubmit(data){
        console.log(data)
    }

    const churcs = [
        {
            id: 1,
            churc_name:"Central",
            address: "Rua São Paulo, 381N, Cristo Rei"
        },
        {
            id: 2,
            churc_name:"São Francisco",
            address: "Rua amazonia, 406n, São francisco"
        },
        {
            id:3,
            churc_name:"Cidade Verde",
            address: "Av. João bosco, 4067n, cidade verde"
        }
    ]

    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor={StylePattern.color_primary}/>
            <KeyboardAvoidingView style={StyleUnique.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={StyleMain.containerTitleSmall}>
                    <Text style={StyleMain.textTitleSmall}>Cadastro</Text>
                </View>
                <View style={StyleUnique.containerForm}>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <View style={StyleUnique.containerFields}>
                            <Input
                                name="password"
                                placeholder="Digite uma senha"
                                secureTextEntry={true}
                                placeholderTextColor={StylePattern.color_white}
                            />
                            <Input
                                name="password"
                                placeholder="Repita sua senha"
                                secureTextEntry={true}
                                placeholderTextColor={StylePattern.color_white}
                            />
                        </View>                       
                        <View style={StyleUnique.containerFields}>
                            <View style={StyleMain.containerTitleLarge}>
                                <Text style={[StyleMain.font, {color: StylePattern.color_green_light}]}>Selecione sua igreja</Text>
                            </View>
                            <Input
                                name="city"
                                placeholder="Cidade"
                                placeholderTextColor={StylePattern.color_white}
                            />
                        </View>
                        <FlatList
                            style={StyleUnique.controlListSelectChurc}
                            data={churcs}
                            renderItem={({item})=>(
                                <View style={StyleUnique.selectChurc}>
                                    <View style={StyleUnique.containerCircle}>
                                        <View style={StyleUnique.circle}></View>
                                    </View>
                                    <View style={StyleUnique.contentListChurc}>
                                        <Text style={[StyleMain.font, StyleUnique.nameChurc]}>{item.churc_name}</Text>
                                        <Text style={[StyleMain.fontLarge]}>{item.address}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                            />
                        <TouchableOpacity style={StyleUnique.btnSubmit} onPress={() => formRef.current.submitForm()}>
                            <Text style={StyleUnique.textSubmit}>Finalizar</Text>
                        </TouchableOpacity>
                    </Form>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}