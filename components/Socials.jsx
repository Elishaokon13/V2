import Link from 'next/link';
import {
	FaDiscord,
	FaInstagram,
	FaTelegramPlane,
	FaTwitter,
} from 'react-icons/fa';

const socialItems = [
	{ href: 'https://discord.gg/H4GEW4q7SJ', icon: <FaDiscord /> },
	{ href: 'https://t.me/limitless_Network_Token', icon: <FaTelegramPlane /> },
	{ href: 'https://twitter.com/Limitless_LNT', icon: <FaTwitter /> },
	// {
	// 	href: 'https://www.instagram.com/kromatika.finance/',
	// 	icon: <FaInstagram />,
	// },
];

const Socials = ({ isSlider }) => {
	return (
		<div className={`socials ${isSlider ? 'slider' : ''}`}>
			{socialItems.map(({ href, icon }, i) => (
				<Link href={href} key={i}>
					<a target='_blank' rel='noopener noreferrer'>
						{icon}
					</a>
				</Link>
			))}
		</div>
	);
};

export default Socials;
