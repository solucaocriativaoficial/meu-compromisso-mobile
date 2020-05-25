import {StyleSheet} from 'react-native';
import StylePattern from './StylePattern';
const Main = StyleSheet.create({
    textTitleSmall:{
        fontWeight: 'bold',
        fontSize: 20,
        color: StylePattern.color_white,
    },
    font:{
        fontWeight: 'bold',
        fontSize: 16,
        color: StylePattern.color_white,
    },
    fontLarge:{
        fontWeight: 'bold',
        fontSize: 12,
        color: StylePattern.color_white,
    },
    containerTitleSmall:{
        marginTop: 5,
        marginBottom: 10,
    },
    containerTitleLarge:{
        width: "100%",
        marginVertical: 20,
        color: StylePattern.color_green_light,
    },
    containerMain:{
        flex: 1,
        paddingHorizontal: 10,
    }
})

export default Main;