import {StyleSheet} from 'react-native';
import StylePattern from '../../Style/StylePattern'

const Style = StyleSheet.create({
    container:{
        backgroundColor: StylePattern.color_black,
    },
    containerTitle:{
        justifyContent: "center",
        marginVertical: 20,
    },
    logoLogin:{
        width: 120,
        height: 120,
    },
    containerForm:{
        height: 250,
        alignItems: "center",
        justifyContent: "center",
    },
    btnSubmit:{
        width: "100%",
        height: StylePattern.input_height,
        borderRadius: StylePattern.borderRadius,
        backgroundColor: StylePattern.color_white,
        alignItems: "center",
        justifyContent: "center",
    },
    textSubmit:{
        color: StylePattern.color_primary,
        fontSize: StylePattern.fontSizeSmall,
        fontWeight: 'bold',
    },
    containerLinks:{
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    btnLinks:{
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    btnLinksText:{
        color: StylePattern.color_white,
        fontSize: StylePattern.fontSizeSmall,
    }
})

export default Style;