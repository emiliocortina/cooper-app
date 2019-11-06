import { StyleSheet } from "react-native";
import { Typography } from "cooper/styles";

const loginStyles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  Content: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "70%"
  },
  Form: {
    width: "85%",
    paddingBottom: 10
  },
  Link: {
    paddingTop: 20,
    color: "white",
    textDecorationLine: "underline"
  },
  Title: {
    ...Typography.h2,
    color: "white",
    padding: 20,
    paddingBottom: 0,
  },
  Header: {
    width: "100%",
    marginTop: 50,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  Close: {
    borderRadius: 20,
    height: 40,
    aspectRatio: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  BlurPanel: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 30,
  }
});
export default loginStyles;
