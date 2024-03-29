import {StyleSheet} from "react-native";

const searchStyles = StyleSheet.create({
  Content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  Row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  MiniCard: {
    height: 100,
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 5,
    borderRadius: 15,
    marginLeft: 15,
    shadowColor: "rgba(58,55,55,0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 3,
  },
  Left: {
  },
  Right: {
  }
});

export default searchStyles;
