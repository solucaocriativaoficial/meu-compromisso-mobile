import {StyleSheet} from 'react-native';
import StylePattern from '../../Style/StylePattern';

const Style = StyleSheet.create({
    input:{
        width: "100%",
        minWidth: 250,
        color: StylePattern.color_white,
        fontWeight: "bold",
        height: StylePattern.input_height,
        borderRadius: StylePattern.borderRadius,
        borderColor: StylePattern.color_green_light,
        borderWidth: StylePattern.borderWidth,
        marginBottom: 20,
        paddingHorizontal: StylePattern.input_paddingHorizontal,
        fontSize: StylePattern.fontSizeSmall
    },
})

export default Style