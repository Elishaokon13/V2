import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { Accordion } from "../components";

const faqs = [
  {
    label: "What are Limitless Network?",
    content: [
      <>
        Limitless network is a decentralized Crypto project with a multi utility infrastructure that enables growth and sustainability in any market condition through scalable mining as well as a automated leverage trading system.
      </>,
    ],
  },
  {
    label: "What is the mission of this project?",
    content: [
      "The mission of Limitless Network is to provide a decentralized infrastructure that enables growth and sustainability in any market condition through scalable mining as well as a automated leverage trading system.",
      "Limitless network has built a mining facility and our mission is to extend the rewards of mining to our community of $LNT token holders."
    ],
  },
  {
    label: "How do I use Limitless Network Finance DEX?",
    content: [
      "Limitless Network Finance DEX is a decentralized exchange that allows you to swap tokens. Launch the app and connect your wallet. You can then select the token you wish to swap and the token you wish to receive. You can also select the amount you wish to swap. The app will then calculate the amount you will receive. You can then confirm the transaction and wait for the swap to be processed.",
    ],
  },
  
  {
    label: "Is the $LNT token code audited?",
    content: [
      "Yes! $LNT token is a token deployed to BSC network and  audited by Guardian Audit.",
    ],
  },
  {
    label: "Do I have to own $LNT tokens to use Limitless Network Finance DEX?",
    content: [
      "Yes and no :) If you wish to use only the swap aggregator, you don’t need to own $LNT.",
    ],
  },

  // {
  //   label: "Is Limitless Network Finance code open-source?",
  //   content: (
  //     <>
  //       Yes! Limitless Network Finances entire codebase is open-sourced and published on&nbsp;
  //       <Link href="https://github.com/Limitless Network Finance/">
  //         <a target="_blank" rel="noopener noreferrer">
  //           Github
  //         </a>
  //       </Link>
  //       &nbsp; under the MIT and GPL-3.0 license. Anybody can see how it was
  //       developed, built and who are the code contributors. Developers are
  //       encouraged to submit a PR if they are willing to contribute.
  //     </>
  //   ),
  // },
];

const FAQ = () => {
  return (
    <section id="section-faq" className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">FAQ</h2>
      </motion.div>
      <div className="container faqs">
        {faqs.map(({ label, content }, i) => (
          <Accordion label={label} content={content} key={i} id={i} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
