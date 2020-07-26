import React, { Fragment } from 'react'

export default function Parent({ children }) {
	return (
		<Fragment>
			<p>This is the start of child parent component</p>
			<p>--------------Child Function---------------</p>
			{children && children('Atiq')}
			<p>-------------------------------------------</p>
			<p>This is the end of child parent component</p>
		</Fragment>
	)
}
