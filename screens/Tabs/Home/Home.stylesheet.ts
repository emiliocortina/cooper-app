import { StyleSheet } from 'react-native';
import { Buttons, Typography } from 'cooper-app/styles';

const homeStyles = StyleSheet.create({
  Content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  Section: {
    marginTop: 50,
    paddingLeft: 20,
    width: '100%',
  },
  CardsContainer: {
    paddingTop: 50,
    paddingBottom: 30,
  },
  TitleBar: {
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  Avatar: {
    ...Buttons.avatar,
    marginRight: 10,
  },
  Welcome: {
    fontSize: 16,
    fontWeight: '500',
  },
  Name: {
    ...Typography.h3,
    color: '#3c4560',
  },
  LogoutButton: {
    justifyContent: 'center',

  },
});

export default homeStyles;
