import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<Fragment>
			<h1 className="display3 text-center">404 ERROR</h1>
			<h1 className="display3 text-center">Page Not Found</h1>
			<h1 className="display4 text-center">
				<Link to="/">Go to Home</Link>
			</h1>
		</Fragment>
	);
}

export default PageNotFound;
