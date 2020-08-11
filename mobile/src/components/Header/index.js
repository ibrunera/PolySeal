import React from 'react';
import { View, Image } from 'react-native';

import logoImg from '../../assets/logo.png';
import bannerImg from '../../assets/banner.png';

import styles from './style';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={bannerImg} style={styles.banner} />
    </View>
  );
}
