import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div>
			<footer class='text-gray-400 bg-gray-900 body-font'>
				<div class='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
					<p class='text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
						Created by Yaseer Tasleem
					</p>
					<span class='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
						<a
							href='https://github.com/yaseer-13'
							rel='noreferrer'
							target='_blank'>
							<FontAwesomeIcon
								icon={faGithub}
								className='ml-3 text-gray-400'
								size='2x'
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/yaseer-tasleem/'
							rel='noreferrer'
							target='_blank'>
							<FontAwesomeIcon
								icon={faLinkedin}
								className='ml-3 text-gray-400'
								size='2x'
							/>
						</a>
					</span>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
