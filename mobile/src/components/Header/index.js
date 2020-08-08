import React from 'react'
import {View, Image} from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './style'

export default function Header(){
    return(
        <View style={styles.header}>
            <Image source={logoImg}/>
        </View> 
    )
}

