const initialParams = {
	method: 'GET'
}

export function* request(url, params) {
	const response = yield fetch(url, {
		...initialParams,
		...params
	}).then(r => r.json());
	return response;
}