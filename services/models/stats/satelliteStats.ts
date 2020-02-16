import * as React from "react";

export default interface SatelliteStats {
    getDashboardComponent(): React.FC;
    getDetailedComponent(): React.FC;
}
