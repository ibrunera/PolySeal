import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    body:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 10,
        
    },
    button:{
        paddingTop: 10,
        //paddingLeft: 20,
        alignItems: 'center'
    },
    imgButton:{
        backgroundColor : '#C4C4C4',
        borderRadius: 15,
        width: 100,
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtButton:{
        paddingTop: 2,
        fontSize: 15
    }

})