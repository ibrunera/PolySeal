import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

import styles from "./style";

import homeImg from "../../assets/home.png";

export default function Icon({ name, img, nav }) {
  return (
    <TouchableOpacity style={styles.button} onPress={nav}>
      <View style={styles.imgButton}>
        <Image source={img} />
      </View>
      <Text style={styles.txtButton}>{name}</Text>
    </TouchableOpacity>
  );
}
