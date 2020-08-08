import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 90,
    backgroundColor: "#C2FAFE",
    borderColor: "#00A0FB",
    borderWidth: 0.2,
    paddingRight: 12,
  },
  image: {
    width: 70,
    height: 70,
  },
  imageText: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  text: {
    paddingLeft: 10,
    fontSize: 24,
  },
});
