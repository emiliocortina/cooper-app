import { StyleSheet } from 'react-native';
import { Buttons, Typography, Colors } from 'cooper/styles'

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
    marginTop: 50,
    paddingBottom: 30,
  },
  TitleBar: {
    width: '70%',
    marginTop: 50,
    marginBottom: 20,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 4
  },
  Avatar: {
    ...Buttons.avatar,
    marginRight: 10,
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
  UpRightButton: {
    width: '30%',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-end',
    flex: 2
  }
});

export default homeStyles;
