import { LocationService } from "../location.service";
import { formatDate, request } from "./api.service";


export const getLastMonthTemperatures = async () => {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1)
    const endDate = new Date();

    const startDateFormatted = formatDate(startDate);
    const endDateFormatted = formatDate(endDate);

    const location = LocationService.service.getLoadedLocation();
    const { latitude, longitude } = location;
    const url = `API/data/surface-temperature?latitude=${latitude}&longitude=${longitude}&startDate=${startDateFormatted}&finishDate=${endDateFormatted}`;
    return request(url, 'GET');

}
