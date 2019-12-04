import React from 'react';
import PropTypes from 'prop-types';

import { getIconUrl } from '../../../../utils/common';

const ForecastList = ({ data }) => {
	return (
		<div className="forecast-list-wrapper">
			{data.map(el => (
				<div key={el.date} className="forecast-card">
					<div className="date">{el.date}</div>
					<img src={getIconUrl(el.icon)} alt="icon"/>
					<div className="temp">{el.temp}</div>
				</div>
			))}
		</div>
	);
}

ForecastList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired
	}))
}

export default ForecastList;