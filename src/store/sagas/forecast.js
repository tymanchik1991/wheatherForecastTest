import { put, all, call, takeEvery } from 'redux-saga/effects';

import { REQUEST_FORECAST } from '../../constants';
import { updateForecast } from '../actions/forecast';
import { request } from '../../libs/request';

import config from '../../config';

function* fetchForecast(action) {
	const currentWeatherUrl = `${config.apiUrl}/weather?q=${action.city}&units=metric&APPID=${config.apiKey}`;
	const nearestWeatherUrl = `${config.apiUrl}/forecast?q=${action.city}&units=metric&APPID=${config.apiKey}`;
	const [currentWeather, nearestWeather] = yield all([
		call(request, currentWeatherUrl),
		call(request, nearestWeatherUrl),
	]);

	yield put(updateForecast({ currentWeather, nearestWeather }));
}

export default function* watchForecast() {
	yield takeEvery(REQUEST_FORECAST, fetchForecast)
}