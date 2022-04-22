import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const About = () => {
	return (
		<>
			<section className='text-gray-400 bg-gray-900 body-font'>
				<div className='container pt-10 mx-auto'>
					<div className='flex flex-col'>
						<div className='mx-2 h-1 bg-gray-800 rounded overflow-hidden'>
							<div className='w-24 h-full bg-indigo-500' />
						</div>
						<div className=' mx-3 flex flex-wrap sm:flex-row flex-col py-5 '>
							<h1 className='sm:w-2/5 text-white font-medium title-font text-5xl mb-2 sm:mb-0'>
								About Me
							</h1>
							<p className='text-justify px-1 text-md text-lg tracking-wide mt-4'>
								I was born in Mysore, grew up in Bengaluru, went to
								school & college in Bengaluru, Karnataka, and I'm
								currently residing in Hyderabad, Telangana. I{' '}
								<FontAwesomeIcon
									icon={faHeart}
									className=' text-gray-400'
								/>{' '}
								cooking food and watching <strong>anime</strong> and
								<strong> documentaries</strong>.
							</p>
							<p className='text-justify px-1 text-lg  text-md tracking-wide mt-4'>
								I got into front-end development during my college
								years, because it was a form of programming that let me
								visualize my progress and results in a quicker and more
								literal way than other types of programming. While I
								initially tried it out as a test run to see if I'd be
								into programming in general, I fell in{' '}
								<FontAwesomeIcon
									icon={faHeart}
									className=' text-gray-400'
									// size='2x'
								/>{' '}
								with the whole process.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
