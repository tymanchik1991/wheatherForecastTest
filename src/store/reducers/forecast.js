import { UPDATE_FORECAST, REQUEST_FORECAST } from '../../constants';

const initialState = {}

export default function forecast(_state = initialState, action) {
	switch (action.type) {
		case UPDATE_FORECAST:
			return action.data;
		case REQUEST_FORECAST:
		default:
			return initialState;
	}
}