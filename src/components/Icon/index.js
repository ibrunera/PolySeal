import React from 'react'
import {TouchableOpacity, View, Text, Image} from 'react-native'

import styles from './style'

import homeImg from '../../assets/home.png'

export default function Icon(){
    return(
        <TouchableOpacity style={styles.button}>
            <View style={styles.imgButton}>
                <Image source={homeImg}/>
            </View>
            <Text style={styles.txtButton}>
                A Empresa
            </Text>
        </TouchableOpacity>
    )
}