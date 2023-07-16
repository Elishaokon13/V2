import { Web3Button } from "@thirdweb-dev/react";
import Link from 'next/link';
import { useState } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { Link as Scroll } from 'react-scroll';
import { Divider, Logo } from '.';
import Socials from '../components/Socials';

const menuItems = [
	{ icon: '', label: 'Swap', to: 'section-token', isExternal: false },
	{ icon: '', label: 'Liquidity', to: 'section-roadmap', isExternal: false },
	{ icon: '', label: 'Staking Pool', to: 'section-fundamentals', isExternal: false },
	// { icon: '', label: 'FAQ', to: 'section-faq', isExternal: false },
	// {
	// 	icon: '',
	// 	label: 'Blog',
	// 	to: 'https://blog.kromatika.finance/',
	// 	isExternal: true,
	// },
	// {
	// 	icon: '',
	// 	label: 'Docs',
	// 	to: '#',
	// 	isExternal: true,
	// },
];

// const cta = [
// 	{
// 		label: 'Launch Dapp',
// 		to: '/swap',
// 		isExternal: true,
// 		className: 'btn btn-solid',
// 	},
// ];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className='padding-x' style={{ height: '107px', width: '100%' }}>
			<div className='navbar'>
				<Logo path='/' />
				<Divider type='vertical' h='64.5px' />
				<nav className='navbar__nav'>
					<ul className='navbar__list'>
						{menuItems.map(({ icon, label, to, isExternal }, i) =>
							isExternal ? (
								<li className='navbar__item' key={i}>
									<Link href={to}>
										<a
											href={to}
											target='_blank'
											rel='noopener noreferrer'>
											{icon}
											{label}
										</a>
									</Link>
								</li>
							) : (
								<li className='navbar__item' key={i}>
									<Scroll
										activeClass='active'
										to={to}
										spy={true}
										smooth={true}
										duration={500}
										offset={50}>
										{icon}
										{label}
									</Scroll>
								</li>
							)
						)}
					</ul>
				</nav>
			</div>
			<div className='btn-group'>
				<Web3Button
					contractAddress="{{0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD}}"
					action={async (contract) => contract.call("claim")}
					onSuccess={(result) => alert("Claim Success!")}
					onError={(error) => alert("Something went wrong!")}
				>
					CLAIM
				</Web3Button>
			</div>

			<div className='toggle-menu' onClick={() => setOpen(!open)}>
				{open ? <CgClose /> : <CgMenuRight />}
			</div>

			{open && (
				<div className='menu'>
					<nav className='navbar__nav'>
						<ul className='navbar__list'>
							{menuItems.map(({ icon, label, to, isExternal }, i) =>
								isExternal ? (
									<li className='navbar__item' key={i}>
										<Link href={to}>
											<a
												target='_blank'
												rel='noopener noreferrer'>
												{icon}
												{label}
											</a>
										</Link>
									</li>
								) : (
									<li className='navbar__item' key={i}>
										<Scroll
											activeClass='active'
											to={to}
											spy={true}
											smooth={true}
											duration={500}
											offset={-150}>
											{icon}
											{label}
										</Scroll>
									</li>
								)
							)}
						</ul>
					</nav>
					<div className='btn-group'>
						<Web3Button
							contractAddress="{{0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD}}"
							action={async (contract) => contract.call("claim")}
							onSuccess={(result) => alert("Claim Success!")}
							onError={(error) => alert("Something went wrong!")}
						>
							CLAIM
						</Web3Button>
					</div>
					<Socials />
				</div>
			)}
		</header>
	);
};

export default Navbar;