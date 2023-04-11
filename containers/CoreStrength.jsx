import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { images } from "../constants/images";

const { audit, charts, coinKromatika } = images;

const CoreStrength = () => {
  return (
    <section
      id="section-core-strength"
      className="section-padding section-core-strength"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Core Strength</h2>
      </motion.div>

      <div className="hero__content">
        <p>Our innovative dApp brings you:</p>
        <ul>
          <li>
            <figure>
              <Image
                src={coinKromatika}
                alt=""
                layout="fixed"
                width="32px"
                height="32px"
              />
            </figure>
            <p>
              the optimal swap value for your needs by comparing rates across various Dexs and selecting the most favorable rates for you
            </p>
          </li>
          {/* <li>
            <figure>
              <Image
                src={coinKromatika}
                alt=""
                layout="fixed"
                width="32px"
                height="32px"
              />
            </figure>
            <p>
              <strong>reduced slippage</strong> using multiple pools in our
              MetaDEX Aggregator, to execute your trade.
            </p>
          </li> */}
          <li>
            <figure>
              <Image
                src={coinKromatika}
                alt=""
                layout="fixed"
                width="32px"
                height="32px"
              />
            </figure>
            <p>
              <strong>
                automatically processed, decentralized limit orders.
              </strong>
            </p>
          </li>
          {/* <li>
            <figure>
              <Image
                src={coinKromatika}
                alt=""
                layout="fixed"
                width="32px"
                height="32px"
              />
            </figure>
            <p>
              <strong>additional LP fees</strong> on your filled limit orders
              (FELO). Up to 9% depending on volatility of trading pair.
            </p>
          </li> */}
          <li>
            <figure>
              <Image
                src={coinKromatika}
                alt=""
                layout="fixed"
                width="32px"
                height="32px"
              />
            </figure>
            <p>
              Combined, <strong>Limitless Network Finance’s dApp provides you more</strong>, if
              not the best value for every trade you make !
            </p>
          </li>
        </ul>
      </div>

      {/* <h3 className="subtitle">These are our core building blocks</h3>
      <div className="cards-wrapper">
        <div className="card">
          <div className="card__header">
            <figure>
              <Image src={audit} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Secure audited smart contracts</span>
            <span className="card__content">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam quis ex ut mi vehicula placerat vel ac libero. Donec eu libero vel nisl auctor laoreet. Maecenas bibendum nunc in purus dictum, ac ultrices sapien auctor.
              <br />
              <br />
              <Link
                passHref={true}
                href="https://www.certik.com/projects/kromatika"
              >
                <a target="_blank" rel="noopener noreferrer">
                  here.
                </a>
              </Link>
            </span>
          </div>
        </div>

         <div className="card">
          <div className="card__header">
            <figure>
              <Image src={charts} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Off-chain keepers at work</span>
            <span className="card__content">
              The Kromatika protocol utilizes the Chainlink Keepers to make sure
              orders are collected as soon as the price target of the limit
              order is reached. This service is provided off-chain, fully
              decentralized.
              <br />
              <br />
              You can read more about Chainlink Keeper and Kromatika’s full
              scale integration in &nbsp;
              <Link href="https://blog.kromatika.finance/kromatikas-new-generation-dex-now-supported-by-chainlink-keepers-e0b560e14e72">
                <a target="_blank" rel="noopener noreferrer">
                  this Medium article.
                </a>
              </Link>
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <figure>
              <Image src={coinKromatika} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">High utility $LNT token</span>
            <span className="card__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget semper velit. Etiam at sem purus. Fusce ac est euismod, rutrum turpis nec, vestibulum nibh. Integer sollicitudin odio ut quam gravida, nec tincidunt odio posuere. Nullam euismod sagittis augue, in fermentum orci ultricies at. Aenean bibendum laoreet est, eget accumsan erat iaculis vel.
              <br />

            </span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default CoreStrength;
