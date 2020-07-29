import React from "react";
import { View, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Item from "../../components/Item";

import styles from "./style";

import produtosImg from "../../assets/produtos.png";

const listProdutos = [
  {
    id: 1,
    img: produtosImg,
    txt: "Vedações Usinadas",
  },
  {
    id: 2,
    img: produtosImg,
    txt: "Vedações Padronizadas",
  },
];

export default function Produtos() {
  const navigation = useNavigation();

  function navigateTo(produto) {
    navigation.navigate(produto.name);
  }

  const renderProdutos = ({ item }) => (
    <Item img={item.img} txt={item.txt} nav={() => navigateTo(item)} />
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.body}>
        <FlatList
          data={listProdutos}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderProdutos}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
      <Footer />
    </View>
  );
}
