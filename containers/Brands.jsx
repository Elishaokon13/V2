import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Tile } from '../components';
import { brands } from '../constants/brands';

const {
	cg2,
	uniswap,
	polygon,
	chainlink,
	celer,
	BSC,
	dexguru,
	dextlogo,
	FTM,
	vulkania,
	cmc
} = brands;



const buildOn = [
	{ href: 'https://binance.com/en/', logo: BSC },
	{ href: 'https://fantom.foundation/', logo: FTM },
	{ href: 'https://polygon.technology/', logo: polygon },
];


const Brands = () => {
	return (
		<section id='section-brands' className='section-padding'>

			{/* BUILT ON*/}
			<div className='brands'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className='brands__title'>Our DEX Supports</h2>
				</motion.div>
				<div className='brands__links'>
					{buildOn.map(({ href, logo }, index) => (
						<Tile href={href} logo={logo} key={index} />
					))}
				</div>
			</div>

		</section >
	);
};

export default Brands;
