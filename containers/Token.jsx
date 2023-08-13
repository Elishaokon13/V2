import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../constants/images';
import CopyContractAddressButton from '../components/CopyContractAddressButton';

const contractAddress = '0x0a8c1d9f6b1c6d2b1f4c9a4c2a8f8f4f5b4c3f95';

const {
	metamaskLogo,
	arbitrumLogo,
	optimismLogo,
	polygonLogo,
	coinKromatika,
	coinsKromatika,
	circulatingSupply,
	coinsStash,
	goldLock,
} = images;

const Token = () => {
	return (
		<section id='section-token' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>Our Protocol</h2>
			</motion.div>
			<div className='token'>
				
				<div className='token__content'>
					<h3>What is Limitless Network?</h3>
					<p>
						Limitless network is a decentralized Crypto project with a multi utility infrastructure that enables growth and sustainability in any market condition through scalable mining as well as a automated leverage trading system. &nbsp;

						<br />

					</p>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>Our Tokenomics</h2>
			</motion.div>
			<div className='token'>
				<div className='token__content'>

					<p>
						Our tokenomics are designed to reward holders and incentivize the community to grow the project. We have a 6% buy tax and 8% sell tax. 1% of the buy tax is used for marketing and 2% is used for development. 2% of the buy tax is used for liquidity and 1% is used for holders. 2% of the sell tax is used for marketing and 2% is used for development. 2% of the sell tax is used for liquidity and 2% is used for holders.
						<br />
					</p>
				</div>
			</div>
			{/* CARDS UNDER TOKEN SECTION */}
			<div className='cards-wrapper'>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='card'>
					<figure>
						<Image src={circulatingSupply} alt='' />
					</figure>
					<div className='card__overlay'>
						<span className='card__title'>Circulating Supply</span>
						<span className='card__content'>
							<p>
								Total Supply: 1,000,000,000
							</p>
							<p>
								Blockchain: BNB Chain
							</p>
							<p>
								Token Symbol: $LNT
							</p>
							<p>
								Token name: Limitless Network
							</p>

						</span>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='card'>
					<figure>
						<Image src={coinsStash} alt='' />
					</figure>
					<div className='card__overlay'>
						<span className='card__title'>Token Taxes</span>
						<span className='card__content'>
							<b>
								Buy Tax: 6%
							</b>
							<p>
								1% Marketing<br />
								2% Development<br />
								1% Holders<br />
								2% liquidity
							</p>
							<b className='text-bold mb-1.5'>
								Sell Tax: 8%
							</b>
							<p>
								2% Marketing <br />
								2% Development<br />
								2% Holders<br />
								2% liquidity
							</p>

						</span>
					</div>
				</motion.div>
				
			</div>
			{/* HOW TO BUY UNDER TOKEN SECTION */}
			<div className='token'>
				
				<div className='token__content'>
					<h3>How to buy $LNT?</h3>
					<p>
						The easiest way to purchase $LNT, is by using Limitless Network Swap
						Aggregator: &nbsp;
						<Link href='/swap'>
							<a target='_blank' rel='noopener noreferrer'>
								launch the dapp
							</a>
						</Link>
						&nbsp; and connect your wallet. No $LNT is required to use the swap
						aggregator. The swap aggregator is working on Polygon mainnet,
						Fantom and BSC.
					</p>


					<Link
						passHref={true}
						href='/swap'>
						<motion.a
							className='btn btn-solid'
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
							whileTap={{ scale: 0.9 }}>
							Buy $LNT
						</motion.a>
					</Link>
					<CopyContractAddressButton contractAddress={contractAddress} />
					<div className='token'>
						<div className='token__content'>
							<h3 className='mt-8'>NOTE:</h3>
							<p>
								LNT investors are not penalized by sells, buy-backs, or wallet-redistributions and transfers.
								<br />
								<strong>Disclaimer: Reward benefits from reward Tiers 1,2 and 3 may be subject to change based amount of holders and total profits generated from the limitless Network mining facility</strong>
							</p>						
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Token;
