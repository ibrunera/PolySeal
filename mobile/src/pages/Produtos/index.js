import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Item from '../../components/Item';

import styles from './style';

import produtosImg from '../../assets/produtos.png';

const listProdutos = [
  {
    id: 1,
    img: produtosImg,
    txt: 'Vedações Usinadas',
    name: 'VedacoesUsinadas',
  },
  {
    id: 2,
    img: produtosImg,
    txt: 'Vedações Padronizadas',
    name: 'VedacoesPadronizadas',
  },
];

export default function Produtos() {
  const navigation = useNavigation();

  function navigateTo(produto) {
    navigation.navigate(produto.name);
  }

  const renderItem = ({ item }) => (
    <Item img={item.img} txt={item.txt} nav={() => navigateTo(item)} />
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <FlatList
          data={listProdutos}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
        />
      </View>
      <Footer />
    </View>
  );
}
