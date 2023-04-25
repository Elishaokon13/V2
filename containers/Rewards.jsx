import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { images } from '../constants/images';

const {
	Scene_BluePurpleGold_Farming,
	Scene_BluePurpleGold_Trading,
	Scene_BluePurpleGold_NoLimits,
} = images;

const Rewards = () => {
	return (
		<section id='section-fundamentals' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>Reward Tiers</h2>
			</motion.div>
			<div className='cards-wrapper'>
				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_Farming} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Tier 1 Rewards</span>
						<span className='card__content'>
							<p>
								We have a total of 3 reward tiers. The first tier is the most basic one, where you can earn 1% rewards by simply holding LNT tokens in your wallet. The rewards are distributed daily and are based on the amount of LNT you hold.
							</p>
						</span>
						{/* <Link href='https://docs.kromatika.finance/'>
							<a
								className='btn btn-solid btn-block'
								target='_blank'
								rel='noopener noreferrer'>
								Let’s go
							</a>
						</Link> */}
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_Trading} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Tier 2 Rewards</span>
						<span className='card__content'>
							<p>
								The second tier is a bit more advanced. You can earn rewards by reinvesting your LNT tokens. This means that you can earn 3% rewards by providing liquidity to the LNT/WBNB pool on our DEX. The rewards are distributed daily and are based on the amount of LNT you hold.
							</p>
						</span>
						
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_NoLimits} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>3rd Tier Rewards</span>
						<span className='card__content'>
							<p>
								Hold on, we’re not done yet. The third tier is the most advanced one. You can earn 6% rewards by holding 30,000,000 LNT tokens in your wallet. Reinvest dividends and earn rewards.
							</p>
						</span>
						
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rewards;
