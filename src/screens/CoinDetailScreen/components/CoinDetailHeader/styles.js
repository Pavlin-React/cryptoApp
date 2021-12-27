import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tickerTitle: {
    color: "white",
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 2,
  },
  rankText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
