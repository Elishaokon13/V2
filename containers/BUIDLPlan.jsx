import { motion } from 'framer-motion';
import { Fragment, useRef } from 'react';
import { Divider, Quarter } from '../components';

const quarters = [
	{
		title: '',
		goals: [
			{
				status: true,
				goal: 'Launching the Limitless Network Finance Community.',
			},
			{
				status: true,
				goal: 'Release of the Limitless Network Finance protocol.',
			},
			{
				status: true,
				goal: 'Release of the Limitless Network Finance website.',
			},
			{
				status: true,
				goal: 'Launch of web-based Limitless Network Finance DEX.',
			},
		],
	},
	{
		title: '',
		goals: [
			{
				status: false,
				goal: 'Release of the Limitless Network Finance whitepaper.',
			},
			{
				status: true,
				goal: 'Fairlunch of the $LNT token.',
			},,
				
			{
				status: true,
				goal: 'Limitless Network Finance v2 (new features, modern UI, hybrid DEX).',
			},
		],
	},
	// {
	// 	title: '',
	// 	goals: [
	// 		{
	// 			status: true,
	// 			goal: 'Limitless Network Finance DAO governance launch',
	// 		},
	// 		{
	// 			status: false,
	// 			goal: 'Create KROM/OP liquidity pool.',
	// 		},
	// 		{
	// 			status: false,
	// 			goal: 'Liquidity mining program for KROM/OP.',
	// 		},
	// 		{
	// 			status: true,
	// 			goal: 'Launch perpetual trading.',
	// 		},
	// 		{
	// 			status: false,
	// 			goal: 'Launch referral program on Optimism.',
	// 		},
	// 		{
	// 			status: false,
	// 			goal: 'Gas refund program on Optimism.',
	// 		},
	// 		{
	// 			status: false,
	// 			goal: 'Implement fiat on-ramp service.',
	// 		},
	// 		{
	// 			status: false,
	// 			goal: 'Implement cross-chain bridge solution.',
	// 		},
	// 	],
	// },
];

const BUIDLPlan = () => {
	return (
		<section id='section-roadmap' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>BUIDL Plan</h2>
			</motion.div>
			<p className={'buidl-plan'}>
			We will fair launch our project and begin to scale up our mining operation with a bigger location and additional miners. Our focus is using more efficient energy to help maximize our facilities growth as well as, maximizing the profits to our investors. In addition, we will be utilizing our leverage trading system to help bring continued sustainability and growth to the Limitless Network investors community.
			</p>
			<div className='roadmap container'>
				{quarters.map((quarter, i) => (
					<Fragment key={i}>
						<Quarter quarter={quarter} />
						<span className='checkpoint' />
					</Fragment>
				))}
				<Divider type='vertical' h='58rem' w='0' />
			</div>
		</section>
	);
};

export default BUIDLPlan;
