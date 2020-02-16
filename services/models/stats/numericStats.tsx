import * as React from 'react';
import SatelliteStats from './satelliteStats';

class NumericStats implements SatelliteStats {
    getDashboardComponent(): React.FC {
        throw new Error("Method not implemented.");
    }    
    getDetailedComponent(): React.FC {
        throw new Error("Method not implemented.");
    }
}