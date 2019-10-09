import {StyleSheet} from 'react-native';
import {Buttons, Typography, Colors} from 'cooper/styles'

const loginStyles = StyleSheet.create({
    Container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    Content: {
      flex: 4,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: '70%',
    },
    Form: {
      width: '75%',
      paddingBottom: 20
    },
    Link: {
      paddingTop: 20,
      color: '#3c4560',
      textDecorationLine:'underline'
    },
    Title: {
      ...Typography.h2,
      color: '#3c4560',
      padding: 20,
    },
    Header: {
      width: '100%',
      marginTop: 50,
      marginBottom: 20,
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    }
});
export default loginStyles;