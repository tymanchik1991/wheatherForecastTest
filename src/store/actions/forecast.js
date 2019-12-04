import { UPDATE_FORECAST, REQUEST_FORECAST } from '../../constants';

export function updateForecast(data) {
	return { type: UPDATE_FORECAST, data };
}
export function getForecast(city) {
	return { type: REQUEST_FORECAST, city }
}