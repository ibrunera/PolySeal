import React from 'react';
import { Text, View, Image } from 'react-native';

import seloImg from '../../assets/selo25anos.png';
import rinaImg from '../../assets/rina.png';

import styles from './style';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerTextBox}>
        <Text style={styles.footerText}>
          São Paulo{'\n'}Av. Afonso Monteiro{'\n'}da Cruz, 1080{'\n'}9980-550
          {'\n'}Serraria-Diadema - SP
        </Text>
      </View>
      <Image source={seloImg} style={styles.footerImg} />
      <Image source={rinaImg} style={styles.footerImgRina} />
    </View>
  );
}
