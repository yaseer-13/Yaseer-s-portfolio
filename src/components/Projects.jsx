import React from 'react';

const Projects = () => {
	return (
		<div>
			<section className='text-gray-400  bg-gray-900 body-font'>
				<div className='mx-8 h-1 bg-gray-800 rounded overflow-hidden'>
					<div className='w-24 h-full bg-indigo-500' />
				</div>
				<div className=' mx-9 flex flex-wrap sm:flex-row flex-col py-5 '>
					<h1 className='sm:w-2/5 text-white font-medium title-font text-5xl mb-2 sm:mb-0'>
						Projects
					</h1>
				</div>

				<div className='container px-5 py-10 mx-auto '>
					<div className='flex flex-wrap -mx-4 -mb-10 text-center'>
						<div className='sm:w-1/2 mb-10 px-4 '>
							<div className='rounded-lg h-76 overflow-hidden '>
								<a
									href='https://techill.netlify.app/'
									rel='noreferrer'
									target='_blank'>
									<img
										alt='content'
										className='object-cover object-center h-full w-full'
										src={require('./img/techill.png')}
									/>
								</a>
							</div>
							<h2 className='title-font text-2xl font-medium uppercase text-white mt-6 mb-3'>
								Techill
							</h2>
							<p className='leading-relaxed text-base'>
								Developed a responsive Lo-fi Music Player app with a
								library of music, the users can play or pause, skip,
								mute, and loop the music.
							</p>
							<div className='px-6 pt-4 pb-2 uppercase'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Html
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									scss
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									React js
								</span>
							</div>
						</div>

						<div className='sm:w-1/2 mb-10 px-4'>
							<div className='rounded-lg h-76 overflow-hidden'>
								<a
									href='https://criptogen.netlify.app/'
									rel='noreferrer'
									target='_blank'>
									<img
										alt='content'
										className='object-cover object-center h-full w-full '
										src={require('./img/CRIPTOGEN.png')}
									/>
								</a>
							</div>
							<h2 className='title-font text-2xl font-medium text-white mt-6 mb-3'>
								CRIPTOGEN
							</h2>
							<p className='leading-relaxed text-base'>
								Developed a responsive Cryptocurrency app that consumes
								Coin Ranking & Bing News Search API to deliver
								information on the cryptocurrency market.
							</p>
							<div className='px-6 pt-4 pb-2 uppercase'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Html
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									css
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Tailwind CSS
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									React js
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									API
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className='container px-5  mx-auto'>
					<div className='flex flex-wrap -mx-4 -mb-10 text-center'>
						<div className='sm:w-1/2 mb-10 px-4'>
							<div className='rounded-lg h-76 overflow-hidden'>
								<a
									href='https://appcine.netlify.app/'
									rel='noreferrer'
									target='_blank'>
									<img
										alt='content'
										className='object-cover object-center h-full w-full'
										src={require('./img/appcine.png')}
									/>
								</a>
							</div>
							<h2 className='title-font text-2xl font-medium uppercase text-white mt-6 mb-3'>
								APPCINE
							</h2>
							<p className='leading-relaxed text-base'>
								Developed a responsive Movie app that consumes The Movie
								Database (TMDB) API to deliver information about the
								latest movies.
							</p>
							<div className='px-6 pt-4 pb-2 uppercase'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Html
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									css
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									JavaScript
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Api
								</span>
							</div>
						</div>

						<div className='sm:w-1/2 mb-10 px-4'>
							<div className='rounded-lg h-76 overflow-hidden'>
								<a
									href='https://air-stratus.netlify.app/'
									rel='noreferrer'
									target='_blank'>
									<img
										alt='content'
										className='object-cover object-center h-full w-full'
										src={require('./img/air.png')}
									/>
								</a>
							</div>
							<h2 className='title-font text-2xl font-medium text-white mt-6 mb-3'>
								AIR STRATUS
							</h2>
							<p className='leading-relaxed text-base'>
								Developed a responsive Weather app that consumes Open
								Weather Map API to deliver information on the weather of
								different cities around the world.
							</p>
							<div className='px-6 pt-4 pb-2 uppercase'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Html
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									css
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									JavaScript
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									API
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className='container px-5 py-10 mx-auto'>
					<div className='flex flex-wrap -mx-4 -mb-10 text-center'>
						<div className='sm:w-1/2 mb-10 px-4'>
							<div className='rounded-lg h-76 overflow-hidden'>
								<a
									href='https://starbucks-comcept.netlify.app/'
									rel='noreferrer'
									target='_blank'>
									<img
										alt='content'
										className='object-cover object-center h-full w-full'
										src={require('./img/starbucks.png')}
									/>
								</a>
							</div>
							<h2 className='title-font text-2xl font-medium uppercase text-white mt-6 mb-3'>
								STARBUCKS CONCEPT LANDING PAGE
							</h2>
							<p className='leading-relaxed text-base'>
								Built a responsive Starbucks landing page concept.
							</p>
							<div className='px-6 pt-4 pb-2 uppercase'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Html
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									css
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									JavaScript
								</span>
							</div>
						</div>
						<div className='sm:w-1/2 mb-10 px-4'>
							<div className='rounded-lg h-76 overflow-hidden'>
								<a
									href='https://physion.netlify.app/'
									rel='noreferrer'
									target='_blank'>
									<img
										alt='content'
										className='object-cover object-center h-full w-full '
										src={require('./img/physion.png')}
									/>
								</a>
							</div>
							<h2 className='title-font text-2xl font-medium text-white mt-6 mb-3'>
								PHYSION
							</h2>
							<p className='leading-relaxed text-base'>
								Built a responsive landing page for Physiotherapy &
								Chiropractor center called Physion.
							</p>
							<div className='px-6 pt-4 pb-2 uppercase'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Html
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									css
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Bootstrap
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className='container px-5 mx-auto'>
					<div className='flex flex-wrap -mx-4 -mb-10 text-center'>
						<div className='sm:w-1/2 mb-10 px-4'>
							<div className='rounded-lg h-76 overflow-hidden'>
								<a
									href='https://vigilant-wright-41cf67.netlify.app/'
									rel='noreferrer'
									target='_blank'>
									<img
										alt='content'
										className='object-cover object-center h-full w-full'
										src={require('./img/Narratori.png')}
									/>
								</a>
							</div>
							<h2 className='title-font text-2xl font-medium uppercase text-white mt-6 mb-3'>
								Narratori
							</h2>
							<p className='leading-relaxed text-base'>
								Developed a responsive Anime Quotes Generator that
								consumes Animechan API to deliver quality anime quotes.
							</p>
							<div className='px-6 pt-4 pb-2 uppercase'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Html
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									css
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									JavaScript
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									api
								</span>
							</div>
						</div>

						<div className='sm:w-1/2 mb-10 px-4'>
							<div className='rounded-lg h-76 overflow-hidden'>
								<a
									href='https://breathlab.netlify.app/'
									rel='noreferrer'
									target='_blank'>
									<img
										alt='content'
										className='object-cover object-center h-full w-full '
										src={require('./img/BreathLab.png')}
									/>
								</a>
							</div>
							<h2 className='title-font text-2xl font-medium uppercase text-white mt-6 mb-3'>
								BreathLab
							</h2>
							<p className='leading-relaxed text-base'>
								Developed a responsive Relaxation app to unwind from
								today's tension.
							</p>
							<div className='px-6 pt-4 pb-2 uppercase'>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									Html
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									css
								</span>
								<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									JavaScript
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Projects;
