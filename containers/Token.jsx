import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../constants/images';

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
				{/* <motion.div
					initial={{ x: -100 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1 }}
					className='motion-div'>
					 <figure className='token__figure'>
						<Image src={coinsKromatika} alt='Coins' className='token__img' />
					</figure>
				</motion.div> */}
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
					{/* <figure>
						<Image src={circulatingSupply} alt='' />
					</figure> */}
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
								1% Marketing<br/>
								2% Development<br/>
								1% Holders<br/>
								2% liquidity
							</p>
							<b className='text-bold mb-1.5'>
								Sell Tax: 8%
							</b>
							<p>
								2% Marketing <br/>
								2% Development<br/>
								2% Holders<br/>
								2% liquidity
							</p>
							
						</span>
					</div>
				</motion.div>
				{/* <motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='card'>
					<figure>
						<Image src={goldLock} alt='' />
					</figure>
					<div className='card__overlay'>
						<span className='card__title'>Increased security</span>
						<span className='card__content'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada quam. Praesent a aliquam sapien. Vestibulum tincidunt tellus vitae neque pellentesque congue. Sed commodo leo a sapien tincidunt sollicitudin. In eu commodo justo
								<Link href='https://etherscan.io/tx/0x26c782eb49c42979c259dda936f28b77ae8dbeef16da3ec341d06cb437034ac4'>
									<a target='_blank' rel='noopener noreferrer'>
										here.
									</a>
								</Link>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada quam. Praesent a aliquam sapien. Vestibulum tincidunt tellus vitae neque pellentesque congue. Sed commodo leo a sapien tincidunt sollicitudin. In eu commodo justo
							</p>
						</span>
					</div>
				</motion.div> */}
			</div>
			{/* HOW TO BUY UNDER TOKEN SECTION */}
			<div className='token'>
				{/* <motion.div
					initial={{ x: -300 }}
					whileInView={{
						x: 0,
						scale: [1, 2, 2, 1, 1],
						rotate: [0, 0, 150, 200, 0],
						borderRadius: ['20%', '20%', '50%', '50%', '20%'],
					}}
					transition={{ duration: 1 }}
					className='motion-div'>
					 <figure className='token__figure'>
						<Image src={coinKromatika} alt='Coins' className='token__img' />
					</figure> 
				</motion.div> */}
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

					{/* <ul>
						<li>
							<figure>
								<Image
									src={metamaskLogo}
									alt=''
									layout='fixed'
									width='28px'
									height='28px'
								/>
							</figure>
							<p>
								How to buy $LNT using the Ethereum mainnet (via &nbsp;
								<Link href='https://1474401179-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoxScRKy1rYzwfDKYX6RP%2Fuploads%2FXHJSQgGUDFPHD7VBeXho%2FKrom_guide_-_Mainnet.pdf?alt=media&token=23e4fb30-b570-46ff-b242-97f67506a50b'>
									<a target='_blank' rel='noopener noreferrer'>
										Mainnet Ethereum
									</a>
								</Link>
								)?
							</p>
						</li>
						<li>
							<figure>
								<Image
									src={optimismLogo}
									alt=''
									layout='fixed'
									width='28px'
									height='28px'
								/>
							</figure>
							<p>
								How to add &nbsp;
								<Link href='https://1474401179-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoxScRKy1rYzwfDKYX6RP%2Fuploads%2FM25inSyXdPgxhiccP2H7%2FKrom_guide_-_Optimism.pdf?alt=media&token=d871ef22-7715-4f5d-94e0-098b08651feb'>
									<a target='_blank' rel='noopener noreferrer'>
										Optimism
									</a>
								</Link>
								&nbsp; to & buy $LNT using metamask?
							</p>
						</li>
						<li>
							<figure>
								<Image
									src={arbitrumLogo}
									alt=''
									layout='fixed'
									width='28px'
									height='28px'
								/>
							</figure>
							<p>
								How to add &nbsp;
								<Link href='https://1474401179-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoxScRKy1rYzwfDKYX6RP%2Fuploads%2FfVZC2Pa4XlW9k3Doh1GJ%2FKrom_guide_-_Arbitrum.pdf?alt=media&token=3ab51ac2-0348-4c47-87e6-2298d7ee0249'>
									<a target='_blank' rel='noopener noreferrer'>
										Arbitrum
									</a>
								</Link>
								&nbsp; to & buy $LNT using metamask?
							</p>
						</li>
						<li>
							<figure>
								<Image
									src={polygonLogo}
									alt=''
									layout='fixed'
									width='28px'
									height='28px'
								/>
							</figure>
							<p>
								How to add &nbsp;
								<Link href='https://1474401179-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoxScRKy1rYzwfDKYX6RP%2Fuploads%2FueqXnDg62spA7tRp0Yau%2FKrom_guide_-_Polygon.pdf?alt=media&token=1e538bcb-0ecb-48b0-8b1d-b45e23d12e20'>
									<a target='_blank' rel='noopener noreferrer'>
										Polygon
									</a>
								</Link>
								&nbsp; to & buy $LNT using metamask? (guide coming soon)
							</p>
						</li>
					</ul> */}
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
				</div>
			</div>
		</section>
	);
};

export default Token;
