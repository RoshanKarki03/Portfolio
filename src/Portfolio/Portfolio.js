import React from 'react';
import './Portfolio.css';
import manphoto from './manimage.png';
import insta from './instagram.png';
import twitter from './twitter.png';
import facebook from './fb.png';
import halfcircle from './halfCircle.png';
import signature from './sign.png';
import sun from './sunshine.png';
const Portfolio = () => {
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
							<a href='/Home'>Home</a>
						</li>
						<li>
							<a href='about'>About</a>
						</li>
						<li>
							<a href='#'>Portfolio</a>
						</li>
						<li>
							<a href='#'>Projects</a>
						</li>
					</ul>
					<div>
						<button className='click'>
							<a href='#'>Contact Us</a>
						</button>
					</div>
				</nav>

				<div className='profile'>
					<div className='paragraph'>
						<p className='p1'>speed up connection</p>
						<div className='head1'>
							<h1>Hi, I am Roshan Karki</h1>
							<img className='sun' src={sun}></img>
						</div>
						<p className='p2'>This is my portfolio. And this is my profile</p>
						<div className='btnarrow'>
							<button className='hire'>Hire Me</button>
							<svg
								className='icon'
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-caret-right'
								width='44'
								height='44'
								viewBox='0 0 24 24'
								stroke-width='3'
								stroke='#00abfb'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M18 15l-6 -6l-6 6h12' transform='rotate(90 12 12)' />
							</svg>
						</div>
						<div className='footer'>
							<img src={insta}></img>
							<img src={facebook}></img>
							<img src={twitter}></img>
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-arrow-narrow-down'
								width='44'
								height='44'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='#00abfb'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<line x1='12' y1='5' x2='12' y2='19' />
								<line x1='16' y1='15' x2='12' y2='19' />
								<line x1='8' y1='15' x2='12' y2='19' />
							</svg>
						</div>
					</div>

					<div className='imageside'>
						<img className='circle' src={halfcircle}></img>
						<img className='man' src={manphoto}></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
