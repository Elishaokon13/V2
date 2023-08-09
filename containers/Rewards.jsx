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
								The first Tier is the most basic one, where you can earn rewards by holding LNT tokens in your wallet. Hold LNT AND EARN BNB. The rewards are distributed daily from transactions and bi-weekly from the LNT Mining Facility.
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
								The second Tier is a bit more advanced. By holding 10m LNT tokens and reinvesting your rewards, you will earn a higher yield that compounds as you reinvest. 
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
								Hold on, we’re not done yet. The 3rd Tier requires you to provide liquidity with 30m tokens, this allows you to make the highest earnings paid back in the form of LP tokens, as well as earning via all transactions made.
							</p>
						</span>
						
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rewards;
