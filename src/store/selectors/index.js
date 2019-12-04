import { createSelector } from 'reselect';

export const selectForecast = createSelector(
	state => state.forecast,
	forecast => forecast
)