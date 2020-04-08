import * as React from "react";
import { View, Text } from 'react-native';
import SatelliteStats from './satelliteStats';

export default class ChartStats implements SatelliteStats {
    getDetailedComponent(): React.FC {
        return () => (<Text>Hola</Text>);
    }
    getDashboardComponent(): React.FC {
        return () => (<Text>Hola</Text>);
    }
}