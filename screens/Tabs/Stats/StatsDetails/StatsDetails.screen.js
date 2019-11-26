import StatsDetailsTemplate from './StatsDetails.template';
import {createMaterialTopTabNavigator} from "react-navigation-tabs";

const TemperaturesScreen = StatsDetailsTemplate;
TemperaturesScreen.category = "Temperatures";
TemperaturesScreen.navigationOptions = {
    title: 'Temperatures'
}

const PollutionScreen = StatsDetailsTemplate;
PollutionScreen.category = "Temperatures";
PollutionScreen.navigationOptions = {
    title: 'Pollution'
}


const StatsDetailsScreen = createMaterialTopTabNavigator({
    Temperatures: TemperaturesScreen,
    Pollution: PollutionScreen,

}, {});
;



export default StatsDetailsScreen;
