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
    },
  },
);

export default HomeScreen;
