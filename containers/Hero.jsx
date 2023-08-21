import { motion } from "framer-motion";
import Link from "next/link";
// import whitepaper from ".././assets/pdf/LNT.pdf";

const Hero = () => {
  return (
    <section id="section-hero" className="hero">
      <h1 className="hero__title">Limitless Network Finance</h1>
      <p className="hero__subtitle">
      The Gold Standard of Crypto <br/>
      Enables easy, inclusive, and cost-effective DEX trading across different chains.
      </p>
      <div className="btn-group">
        <Link passHref={true} href="https://app.limitlessnetwork.org/swap">
          <motion.a
            className="btn btn-solid"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            Launch Dapp
          </motion.a>
        </Link>
        <Link passHref={true} href="https://limitless-network.gitbook.io/whitepaper">
          <motion.a
            className="btn btn-solid"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            Read Whitepaper
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
