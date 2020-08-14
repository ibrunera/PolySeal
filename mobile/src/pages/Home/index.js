import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Icon from '../../components/Icon';

import styles from './style';

import homeImg from '../../assets/home.png';
import produtosImg from '../../assets/produtos.png';
import contatosImg from '../../assets/contato.png';

const listIcons = [
  {
    id: 1,
    name: 'A Empresa',
    img: homeImg,
  },
  {
    id: 2,
    name: 'Produtos',
    img: produtosImg,
  },
  {
    id: 3,
    name: 'Contato',
    img: contatosImg,
  },
  {
    id: 4,
    name: 'Teste',
    img: contatosImg,
  },
  {
    id: 5,
    name: 'Teste',
    img: contatosImg,
  },
  {
    id: 6,
    name: 'Teste',
    img: contatosImg,
  },

  {
    id: 7,
    name: 'Teste',
    img: contatosImg,
  },
  {
    id: 8,
    name: 'Teste',
    img: contatosImg,
  },
  {
    id: 9,
    name: 'Teste',
    img: contatosImg,
  },
];

export default function Home() {
  const navigation = useNavigation();

  function navigateTo(icon) {
    navigation.navigate(icon.name);
  }

  const renderIcon = ({ item }) => (
    <Icon name={item.name} img={item.img} nav={() => navigateTo(item)} />
  );

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        <FlatList
          data={listIcons}
          keyExtractor={(icon) => String(icon.id)}
          renderItem={renderIcon}
          numColumns={3}
        />
      </View>

      <Footer />
    </View>
  );
}
