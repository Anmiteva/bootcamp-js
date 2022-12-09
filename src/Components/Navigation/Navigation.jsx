import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<header>
			<div className='logo'>
				<img
					src='./logo_elixir.png'
					alt='logo'
				/>
			</div>
			<div className='navigation'>
				<ul>
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
		</header>
	);
};

export default Navigation;
