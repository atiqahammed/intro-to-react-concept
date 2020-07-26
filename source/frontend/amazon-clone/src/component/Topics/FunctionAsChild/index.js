import React, { Component, Fragment } from 'react'
import Parent from './Parent'

export default class FunctionAsComponent extends Component {

	constructor(props) {
		super(props);
		this.childFunction = this.childFunction.bind(this);
	  }	  


	childFunction(name) {
		return (
			<h2>Hi {name}, this from child function</h2>
		);
	}

	render() {
		return (
			<Fragment>
				<h1>Function as Component</h1>
				<Parent>
					{this.childFunction}
				</Parent>
				
			</Fragment>
		)
	}
}
