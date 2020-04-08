import { StyleSheet } from "react-native";
import { Buttons, Typography } from "cooper-app/app/styles";

const profileStyles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    shadowColor: "rgba(58,55,55,0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 3,
  },
  CardsContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  CardsContentContainer: {
    alignItems: "center",
  },
  Content: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "70%"
  },
  Form: {
    width: "75%",
    paddingBottom: 20
  },
  Link: {
    paddingTop: 20,
    color: "#3c4560",
    textDecorationLine: "underline"
  },
  Title: {
    ...Typography.h2,
    color: "#3c4560",
  },
  TitleBar: {
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  Header: {
    width: "100%",
    marginTop: 50,
    marginBottom: 20,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  Avatar: {
    ...Buttons.avatar,
    marginRight: 10,
  },
  Subtitle: {
    ...Typography.h4,
    color: "#3c4560",
    textAlign: "center"
  }
});
export default profileStyles;
