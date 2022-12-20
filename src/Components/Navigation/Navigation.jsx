import { Link } from "react-router-dom"
import "./Navigation.scss"

import { FaBars } from 'react-icons/fa'
import { useRef } from "react";


const Navigation = () => {

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive-nav");
	}

	return (
		<header>
			<div className='logo' onClick={!!showNavbar}>
				<Link to='/'><img src='./logo_elixir.png' alt='logo'/></Link>
			</div>
			<div 
			ref={navRef} 
			className='navigation'>
				<ul onClick={showNavbar}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/menu'>Menu</Link>
					</li>
					<li>
						<Link to='/gallery'>Gallery</Link>
					</li>
					<li>
						<Link to='/reservation'>Reservation</Link>
					</li>
					<li>
						<Link to='/location'>Location</Link>
					</li>
				</ul>
			</div>
			<button 
			onClick={showNavbar} 
			className='nav-btn'><FaBars/></button>
		</header>
	);
};

export default Navigation;
