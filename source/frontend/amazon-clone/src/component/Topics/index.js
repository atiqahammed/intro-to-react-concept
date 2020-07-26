import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class index extends Component {
	render() {
		return (
			<Fragment>
				<h3>Function as Child</h3>
				<p>There is a pattern that is gaining consensus within the React community, called Function as Child.</p>
				<p>The main concept is that, instead of passing a child in the form of a component, we define a function that can receive parameters from the parent.</p>
				<Link to='/function-as-component'>View</Link>


			</Fragment>
		)
	}
}
