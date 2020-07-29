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
    alignItems: "center",
  },
  list: {
    flex: 1,
    alignSelf: "flex-start",
  },
});
