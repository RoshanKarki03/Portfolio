import React from 'react';
import './Portfolio.css';
import signature from './sign.png';
const About = () => {
	return (
		<div className='screen'>
			<div className='box'>
				<nav>
					<div className='logo'>
						<img className='signature' src={signature}></img>
						{/* <p>Roshan Karki</p> */}
					</div>
					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/'>About</a>
						</li>
						<li>
							<a href='/'>Portfolio</a>
						</li>
						<li>
							<a href='/'>Projects</a>
						</li>
					</ul>
					<div>
						<button className='click'>
							<a href='#'>Contact Us</a>
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default About;
