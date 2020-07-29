import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import styles from "./style";

import arrowImg from "../../assets/arrow.png";

export default function Item({ img, txt, nav }) {
  return (
    <TouchableOpacity style={styles.item} onPress={nav}>
      <View style={styles.imageText}>
        <Image source={img} style={styles.image} />
        <Text style={styles.text}>{txt}</Text>
      </View>
      <Image source={arrowImg} />
    </TouchableOpacity>
  );
}
