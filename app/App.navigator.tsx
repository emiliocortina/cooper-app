import React, { useState, useEffect } from "react";
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import StatsScreen from "./screens/Stats/Stats.screen";
import ThreadDetailsScreen from "./screens/ThreadDetails/ThreadDetails.screen";
import { LocationService, LocationContext, LocationData } from "./services/location.service";


const pageSheetOptions = {
    gestureEnabled: true,
    cardOverlayEnabled: true,
    ...TransitionPresets.ModalPresentationIOS
}

const Stack = createStackNavigator();

const MainAppNavigator: React.FC<{ theme: any }> = () => {

    let [fontsLoaded] = useFonts({
        'Circular': require('cooper-app/assets/fonts/CircularStd-Black.otf'),
    });



    let [locationContextState, setLocationContextState] = useState(
        {
            location: LocationService.lastLoadedLocation,
            changeLocation: (newLocation: LocationData) => {
                setLocationContextState(({ changeLocation }) => ({ location: newLocation, changeLocation: changeLocation }))
            }
        }
    );




    return (
        <>
            {
                fontsLoaded ? (
                    <LocationContext.Provider value={locationContextState}>
                        <Stack.Navigator mode="modal" headerMode="none" screenOptions={pageSheetOptions}>
                            <Stack.Screen name="Tabs" component={StatsScreen} />
                            <Stack.Screen name="Details" component={ThreadDetailsScreen} />
                        </Stack.Navigator >
                    </LocationContext.Provider>

                ) : (
                        <AppLoading />
                    )}
        </>
    );
};

export default MainAppNavigator;
