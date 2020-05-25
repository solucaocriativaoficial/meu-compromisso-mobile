import {StyleSheet} from 'react-native';
import StylePattern from '../../Style/StylePattern';

const Style = StyleSheet.create({
    modal:{
        backgroundColor: StylePattern.color_orange,
        width: "100%",
        height: "50%",
        alignItems: "center",
        borderRadius: 30,
        paddingVertical: 20,
        position: 'absolute',
        bottom: -30,
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
        marginBottom: 30,
    },
    imgBtnClose:{
        width: 20,
        height: 20,
    }
})
export default Style;