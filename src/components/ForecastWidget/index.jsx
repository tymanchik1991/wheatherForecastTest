import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import ForecastList from './components/ForecastList';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import Input from '../Input';

import { getForecast } from '../../store/actions/forecast';
import { selectForecast } from '../../store/selectors';

import { addNth, groupBy } from '../../utils/formatters';

import './index.scss';

const ForecastWidget = ({ searchForecast, forecast }) => {
	const [location, updateLocation] = useState('Kiev');
	useEffect(() => {
		searchForecast(location);
	}, []);

	const _handleSubmit = (e) => {
		e.preventDefault();
		if (location.trim()) {
			searchForecast(location);
		}
	}

	const prepareData = data => {
		const { wind: { speed }, main: { temp, humidity }, dt, name } = data;
		const { icon } = data.weather[0];
		const date = moment.unix(dt);
		const dayOfWeek = date.format('dddd');
		const day = `${date.format('D')}`;
		const time = date.format('hh:mm');
		const dateNth = addNth(day);
		return {
			date: `${dayOfWeek} ${day}${addNth(day)}`,
			temp: Math.round(temp),
			dayOfWeek,
			day,
			time,
			dateNth,
			speed,
			humidity,
			icon,
			name
		};
	}

	const prepareNearestData = data => {
		const { list } = data;
		const grouped = groupBy(list.map(el => prepareData(el)), 'date');
		const keys = Object.keys(grouped);
		return keys.map(key => grouped[key][0]);
	}

	const getView = () => {
		if (forecast.currentWeather) {
			if (forecast.currentWeather.cod !== "404") {
				return (
					<>
						<CurrentWeatherCard data={prepareData(forecast.currentWeather)} />
						<ForecastList data={prepareNearestData(forecast.nearestWeather)} />
					</>
				);
			} else {
				return <div className="weather-widget-loading">City not found</div>
			}
		} else {
			return <div className="weather-widget-loading">Loading...</div>
		}

	}

	return (
		<form onSubmit={_handleSubmit} className="forecast-widget-wrapper">
			<Input
				value={location}
				placeholder={'Enter the city'}
				onChange={(e) => updateLocation(e.target.value)}
				className="location-input"
			/>
			{getView()}
		</form>)
};

const mapStateToProps = (state) => ({
	forecast: selectForecast(state),
})

const mapDispatchToProps = (dispatch) => ({
	searchForecast: city => dispatch(getForecast(city)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ForecastWidget);