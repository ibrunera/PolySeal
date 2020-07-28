import React from 'react';
import { View, Image, Text } from 'react-native';

import homeImg from '../../assets/home.png'
import produtosImg from '../../assets/produtos.png'
import contatosImg from '../../assets/contato.png'

import Header from '../../components/Header'
import Icon from '../../components/Icon'

import styles from './style'

export default function Home(){
    return (

        <View style={styles.container}>

            <Header/> 

            <View style={styles.body}>

                <Icon />

                <View style={styles.button}>
                    <View style={styles.imgButton}>
                        <Image source={produtosImg}/>
                    </View>
                    <Text style={styles.txtButton}>
                        Produtos
                    </Text>
                </View>

                <View style={styles.button}>
                    <View style={styles.imgButton}>
                        <Image source={contatosImg}/>
                    </View>
                    <Text style={styles.txtButton}>
                        Contato
                    </Text>
                </View>

            </View>
            
        
        </View>
    )
}
