import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Item from '../../../../components/Item';

import styles from './style';

import produtosImg from '../../../../assets/produtos.png';

const listEmbolo = [
  {
    id: 1,
    img: produtosImg,
    txt: 'K01-P',
    name: 'K01P',
  },
  {
    id: 2,
    img: produtosImg,
    txt: 'K02-P',
    name: 'K02P',
  },
];

export default function Embolo() {
  const navigation = useNavigation();

  function navigateTo(item) {
    navigation.navigate(item.name);
  }

  const renderItem = ({ item }) => (
    <Item img={item.img} txt={item.txt} nav={() => navigateTo(item)} />
  );
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <FlatList
          data={listEmbolo}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
        />
      </View>
      <Footer />
    </View>
  );
}
