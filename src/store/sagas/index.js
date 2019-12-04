import { all, fork } from 'redux-saga/effects';
import forecast from './forecast';

function* rootSaga() {
	yield all([
		fork(forecast),
	])
}

export default rootSaga;