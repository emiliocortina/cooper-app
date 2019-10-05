import {StyleSheet} from 'react-native';
import {Buttons, Typography, Colors} from 'cooper/styles'

const homeStyles = StyleSheet.create({
  Content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  Section: {
    marginTop: 50,
    paddingLeft: 20,
    width: '100%',
  },
  CardsContainer: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  TitleBar: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 80,
  },
  Avatar: {
    ...Buttons.avatar,
  },
  Welcome: {
    ...Colors.secondaryLabel,
    fontSize: 16,
    fontWeight: '500',
  },
  Name: {
    ...Typography.h3,
    color: '#3c4560',
  },
});

export default homeStyles;
