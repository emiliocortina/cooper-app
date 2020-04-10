import { useState } from "react";
import * as Location from 'expo-location';

export const useCurrentLocation = async () => {
    const [location, setLocation] = useState(null);

    if (location) {
        if (location.name && location.coordinates) {
            return location;
        }
    } else {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
        }

        let loc = await Location.getCurrentPositionAsync({});
        const coordinates = loc.coords;
        const extraInfo = await Location.reverseGeocodeAsync({ latitude: coordinates.latitude, longitude: coordinates.longitude });
        if (extraInfo[0]) {
            setLocation({ name: extraInfo[0].city, coordinates: coordinates });
            return location;
        }
        return { name: '', coordinates: coordinates };
    }


}