import React from "react";
import { View, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Item from "../../components/Item";

import styles from "./style";

import produtosImg from "../../assets/produtos.png";

const listUsinadas = [
  {
    id: 1,
    img: produtosImg,
    txt: "Vedação para Êmbolo",
    name: "Embolo",
  },
  {
    id: 2,
    img: produtosImg,
    txt: "Vedação para Haste",
    name: "Haste",
  },
  {
    id: 3,
    img: produtosImg,
    txt: "Raspadores",
    name: "Raspadores",
  },
  {
    id: 4,
    img: produtosImg,
    txt: "Rotativos",
    name: "Rotativos",
  },
  {
    id: 5,
    img: produtosImg,
    txt: "Anéis Guia / Apoio",
    name: "Guia",
  },
  {
    id: 6,
    img: produtosImg,
    txt: "Anéis Estáticos",
    name: "Estaticos",
  },
];

export default function VedacoesUsinadas() {
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
      <ScrollView contentContainerStyle={styles.body}>
        <FlatList
          data={listUsinadas}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
      <Footer />
    </View>
  );
}
