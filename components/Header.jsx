import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { Link as Scroll } from 'react-scroll';
import { ethers } from 'ethers';
import { Divider, Logo } from '.';
import Socials from '../components/Socials';
import Claim from './claim'

const menuItems = [
  { icon: '', label: 'Swap', to: 'section-token', isExternal: false },
  { icon: '', label: 'Liquidity', to: 'section-roadmap', isExternal: false },
  { icon: '', label: 'Staking Pool', to: 'section-fundamentals', isExternal: false },
];

const Header= () => {

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
                    <a href={to} target='_blank' rel='noopener noreferrer'>
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
                    offset={50}
                  >
                    {icon}
                    {label}
                  </Scroll>
                </li>
              )
            )}
          </ul>
        </nav>
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
                      <a target='_blank' rel='noopener noreferrer'>
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
                      offset={-150}
                    >
                      {icon}
                      {label}
                    </Scroll>
                  </li>
                )
              )}
            </ul>
          </nav>
          <Socials />
        </div>
      )}

      <Claim/>
    </header>
  );
};

export default Header;
