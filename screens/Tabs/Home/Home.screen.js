import {createStackNavigator} from 'react-navigation-stack';
import HomeTemplate from './Home.template';

const HomeScreen = createStackNavigator(
  {
    Home: HomeTemplate,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gestureResponseDistance: {horizontal: 600},
      header: null,
      /*headerStyle: {
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(58,55,55,0.1)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 15,
        borderBottomColor: 'transparent',
        color: '#333333',
      },*/
    },
  },
);

export default HomeScreen;
