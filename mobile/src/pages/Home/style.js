import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  list: {
    flex: 1,
  },
});
