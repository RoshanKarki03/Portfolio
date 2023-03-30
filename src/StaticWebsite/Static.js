import React from 'react';
import './Static.css';
import image from './ladies.png';
import image1 from './curveline.png';
import image2 from './women2.jpg';
import image3 from './man.jpg';
const Static = () => {
	return (
		<>
			<section className='Navigation'>
				<nav>
					<label className='logo'>Remarkable-Remarkable</label>
					<ul>
						<li>
							<a href='#'>Our Offers</a>
						</li>
						<li>
							<a href='#'>Get a fast quote</a>
						</li>
						<li>
							<a href='#'>Menu</a>
						</li>
					</ul>
				</nav>
			</section>

			<section className='section2'>
				<div className='body'>
					<div className='p1'>
						<h1>
							We help you <br />
							scale your small <br />
							business
						</h1>
					</div>
					<div className='paragraph1'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt.
						<br />
					</div>
					<div className='image1'>
						<img src={image1} alt=''></img>
					</div>
				</div>
				<div className='image'>
					<img src={image} alt=''></img>
				</div>
				<div className='paragraph2'>
					Scale your small lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et dolore.
				</div>
			</section>

			<section className='section3'>
				<button className='learning'>Learn about our mission</button>
				<div className='p3'>
					Set new heights, <br />
					improve your business
				</div>
				<div className='p4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					<br /> eiusmod tempor incididunt.
				</div>
				<div className='menu2'>
					<ul>
						<li>
							<a href='#'>connect with professionals</a>
						</li>
						<li>
							<a href='#'>connect with mentors</a>
						</li>
					</ul>
				</div>
			</section>

			<section className='section4'>
				<img className='image2' src={image2} alt='njjkj'></img>
				<div className='part2'>
					<h1 className='heading2'>Website Engagement Design</h1>
					<div className='p6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod
						<br />
						tempor incididunt ut labore et dolore magna aliqua. Excepteur sint
						<br />
						occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						<br />
						mollit anim id est laborum. <br />
						Lorem ipsum dolor sit amet, consectetur
						<br />
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore
						<br />
						magna aliqua.
					</div>
				</div>
				<button className='quote'>Get a quote</button>
			</section>

			<section className='section5'>
				<h1 className='heading3'>High-impact business services</h1>
				<div className='boxes'>
					<div className='box1'>
						<h2>High-impact business services</h2>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</h4>
					</div>
					<div className='box2'>
						<h2>Learn from the community</h2>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</h4>
					</div>
					<div className='box3'>
						<h2>Customer acquisition</h2>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</h4>
					</div>
					<div className='box4'>
						<h2>Business to business</h2>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</h4>
					</div>
				</div>
			</section>

			<section className='section6'>
				<div className='profile'>
					<div>
						<img className='imageonly' src={image3}></img>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						<br />
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad
						<br />
						minim veniam, quis nostrud exercitation.
					</p>
					<hr className='solidLine'></hr>
					<div className='name'>
						<div
							style={{
								flex: '1',
							}}
						></div>
						<div
							style={{
								flex: '1',
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<div>
								Michael B. <br />
								Clean Tech
							</div>
						</div>
						<span className='arrow'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-arrow-big-left'
								width='44'
								height='44'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='#ffffff'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z' />
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-arrow-big-right'
								width='44'
								height='44'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='#ffffff'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z' />
							</svg>
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default Static;
