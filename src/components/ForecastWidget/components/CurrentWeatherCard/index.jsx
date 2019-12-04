import React from 'react';

import { getIconUrl } from '../../../../utils/common';

const CurrentWeatherCard = ({ data }) => {
	const { speed, temp, humidity, icon, date } = data;
	return (
		<div className='current-card-wrapper'>
			<div className="weather-main-info-wrapper">
				<div className="weather-temperature">{temp}</div>
				<div className="weather-date">{date}</div>
				<div className="weather-short-info">{speed}mph / {humidity}%</div>
			</div>
			<div className="weather-short-info-wrapper">
				<img src={getIconUrl(icon)} alt="weather" />
			</div>
			<div className="weather-city">
				{data.name}
			</div>
		</div>
	)
}

export default CurrentWeatherCard;