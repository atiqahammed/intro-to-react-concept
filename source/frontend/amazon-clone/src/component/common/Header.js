import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {

	const activeLinkStyle = {color : 'red'};

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<NavLink className='navbar-brand' to='/' exact>Application</NavLink>
			<NavLink to='/topics' className='nav-link' activeLinkStyle={activeLinkStyle}>Topics</NavLink>
				
		</nav>
	)
}

export default Header
