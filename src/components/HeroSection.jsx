import React from 'react';

const HeroSection = () => {
	return (
		<>
			<section className='text-gray-400 bg-gray-900 body-font min-h-screen'>
				<div className='container mx-auto flex px-5 py-10 items-center justify-center flex-col'>
					<img
						className='lg:w-2/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded shadow-lg'
						alt='human image'
						src={require('./img/human1.png')}
					/>
					<div className='text-center lg:w-2/3 w-full'>
						<h1 className='title-font sm:text-5xl text-5xl mb-4 font-medium text-white'>
							Hi I'm Yaseer
						</h1>
						<p className='leading-relaxed text-2xl '>
							I'm a Front-End Developer based in the India.
						</p>
						<div class='mouse_scroll'>
							<div class='mouse'>
								<div class='wheel'></div>
							</div>
							<div>
								<span class='m_scroll_arrows unu'></span>
								<span class='m_scroll_arrows doi'></span>
								<span class='m_scroll_arrows trei'></span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
