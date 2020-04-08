import * as React from 'react';
import SatelliteStats from './satelliteStats';
import DasboardNumeric from 'cooper-app/app/components/cards/stats/numeric/dashboardNumeric';

export default class NumericStats implements SatelliteStats {
    title: string;
    value: string | number;
    unit: string;
    color: string;

    constructor(title: string, value: number | string, unit: string, color: string) {
        this.title = title;
        this.value = value;
        this.unit = unit;
        this.color = color;
    }

    getDashboardComponent(aspectRatio: number = 1): React.FC {
        return () =>
            <DasboardNumeric
                aspecRatio={aspectRatio}
                title={this.title}
                value={this.value}
                accentColor={this.color}
                unit={this.unit} />
    }
    getDetailedComponent(): React.FC {
        throw new Error("Method not implemented.");
    }
}

