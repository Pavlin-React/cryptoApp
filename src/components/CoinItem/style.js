import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  rankContainer: {
    borderRadius: 5,
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
})

export default styles
