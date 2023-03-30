import React from 'react';
import './Birthday.css';
const Birthday = () => {
	return (
		<div className='full'>
			<div className='box'>
				<h1>5 birthday today</h1>
				<div className='profile'>
					<div className='profile1'>
						<img
							className='image1'
							src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'
						></img>
						<div className='name'>
							<h3>Bertie Yates</h3>
							<p>26 years</p>
						</div>
					</div>

					<div className='profile1'>
						<img
							className='image1'
							src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg'
						></img>
						<div className='name'>
							<h3>Hester Hogan</h3>
							<p>32 years</p>
						</div>
					</div>

					<div className='profile1'>
						<img
							className='image1'
							src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
						></img>
						<div className='name'>
							<h3>Larry Little</h3>
							<p>36 years</p>
						</div>
					</div>

					<div className='profile1'>
						<img
							className='image1'
							src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
						></img>
						<div className='name'>
							<h3>Sean Walsh</h3>
							<p>34 years</p>
						</div>
					</div>

					<div className='profile1'>
						<img
							className='image1'
							src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
						></img>
						<div className='name'>
							<h3>Lola Gardner</h3>
							<p>29 years</p>
						</div>
					</div>

					<div className='clear'></div>
					<button type='button'>Clear All'</button>
				</div>
			</div>
		</div>
	);
};

export default Birthday;
