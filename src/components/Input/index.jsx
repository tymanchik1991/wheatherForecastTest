import React from 'react';

export default (p) => (
	<div className="inputWrapper">
		<input {...p} />
		<div className="magnifier" />
	</div>
)