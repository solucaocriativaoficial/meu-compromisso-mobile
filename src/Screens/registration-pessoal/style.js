import {StyleSheet} from 'react-native';
import StylePattern from '../../Style/StylePattern'

const Style = StyleSheet.create({
    container:{
        paddingHorizontal: "2.5%",
        backgroundColor: StylePattern.color_black,
    },
    boxLogo:{
        height: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    logoLogin:{
        width: 120,
        height: 120,
    },
    containerForm:{
        alignItems: "center",
    },
    input:{
        width: "100%",
        minWidth: 250,
        color: StylePattern.color_green_light,
        fontWeight: "bold",
        height: StylePattern.input_height,
        borderRadius: StylePattern.borderRadius,
        borderColor: StylePattern.color_green_light,
        borderWidth: StylePattern.borderWidth,
        marginBottom: 20,
        paddingHorizontal: StylePattern.input_paddingHorizontal,
        fontSize: StylePattern.fontSizeSmall
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
        height: 90,
        marginTop: 50,
        justifyContent: "space-between",
        alignItems: "center",
    },
    btnLinks:{
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    btnLinksText:{
        color: StylePattern.color_white,
        fontSize: StylePattern.fontSizeSmall,
    },
    title: {
        fontSize: StylePattern.fontSizeTitle,
        fontWeight: "bold",
        color: StylePattern.color_white,
    },
    containerFields:{
        width: "100%",
        alignItems: "center"
    },
    containerTitleFields:{
        width: "100%",
    },
    containerTitleFieldsText:{
        color: StylePattern.color_white,
        fontWeight: "bold",
        fontSize: StylePattern.fontSizeSmall,
    }
})

export default Style;