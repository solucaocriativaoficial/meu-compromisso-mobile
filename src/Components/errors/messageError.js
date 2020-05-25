import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet, Animated} from 'react-native';
import iconClose from '../../assets/icon-close.png';
import StylePattern from '../../Style/StylePattern';

export default function MessageErrors({openError = () => {}, message, showError}){
    const [bottomAnimated] = useState(new Animated.Value(0));
    useEffect(()=>{
        if(showError)
        Animated.spring(bottomAnimated, {
            toValue: -200,
            speed: 7,
            bounciness: 4
        }).start()

        else
        Animated.spring(bottomAnimated, {
            toValue: 0,
            speed: 4,
            bounciness: 6
        }).start()
    }, [showError])

    // if(showError)
    return(
        <Animated.View style={[StyleUnique.modal, {
            transform: [
                {translateY: bottomAnimated}
            ]
        }]}>
            <View style={StyleUnique.containerMessage}>
                <TouchableOpacity style={StyleUnique.btnClose} onPress={()=> openError()}>
                    <Image source={iconClose} style={StyleUnique.imgBtnClose}/>
                </TouchableOpacity>
                <Text style={StyleUnique.textMessage}>{message}</Text>
            </View>
        </Animated.View>
    )
}

const StyleUnique = StyleSheet.create({
    modal:{
        backgroundColor: StylePattern.color_orange,
        width: "100%",
        height: 250,
        alignItems: "center",
        borderRadius: 30,
        paddingVertical: 10,
        position: 'absolute',
        bottom: -300,
        left: 0,
        zIndex: 9999,
    },
    containerMessage:{
        width: "90%",
        alignItems: "center",
    },
    textMessage:{
        color: StylePattern.color_white,
        fontWeight: 'bold',
    },
    btnClose:{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: StylePattern.color_black,
        marginBottom: 15,
    },
    imgBtnClose:{
        width: 20,
        height: 20,
    }
})