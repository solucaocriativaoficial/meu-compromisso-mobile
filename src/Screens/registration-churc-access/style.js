import {StyleSheet} from 'react-native';
import StylePattern from '../../Style/StylePattern'

const Style = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: "2.5%",
        backgroundColor: StylePattern.color_black,
    },
    containerForm:{
        alignItems: "center",
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
    },
    selectChurc:{
        width: "100%",
        height: 50,
        flexDirection: "row",
    },
    containerCircle:{
        width: 30,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    circle:{
        width: 15,
        height: 15,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: StylePattern.color_green_light,
    },
    contentListChurc:{
        paddingLeft: 10,
        width: "90%",
    },
    nameChurc:{
        color: StylePattern.color_green_light,
    },
    controlListSelectChurc:{
        marginBottom: 20,
    }
})

export default Style;