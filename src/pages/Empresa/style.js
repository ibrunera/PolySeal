import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    
    header: {
        backgroundColor : '#C4C4C4',
        paddingHorizontal: 24,
        paddingTop: 25,
        height: 107,
    },
    body:{
        paddingHorizontal: 12,
        
    },
    empImgs:{
        width: "100%",
    },
    title:{
        color: 'red',
        fontSize: 30,
        padding:12
    },
    paragraph:{
        fontSize:15
        
    }
})