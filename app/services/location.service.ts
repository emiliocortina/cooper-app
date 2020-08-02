import { useState } from "react";
import * as Location from 'expo-location';
import React from "react";

export class LocationService {

    static lastLoadedLocation: LocationData;

    static async getCurrentLocation(): Promise<LocationData> {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }

        let loc = await Location.getCurrentPositionAsync({});
        const coordinates = loc.coords;
        const extraInfo = await Location.reverseGeocodeAsync({ latitude: coordinates.latitude, longitude: coordinates.longitude });
        let locationName = coordinates.latitude + ', ' + coordinates.longitude;
        if (extraInfo[0] && extraInfo[0].city) {
            locationName = extraInfo[0].city;
        }
        LocationService.lastLoadedLocation = { name: locationName, latitude: coordinates.latitude, longitude: coordinates.longitude }
        return LocationService.lastLoadedLocation;
    }
}

export interface LocationData {
    name: string, latitude: number, longitude: number
}



export const LocationContext = React.createContext({ location: { name: 'New York City', latitude: 40.771374, longitude: -73.975198 }, changeLocation: (newLocation: LocationData) => { } });