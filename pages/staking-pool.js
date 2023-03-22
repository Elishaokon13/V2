import { ConnectWallet } from "@thirdweb-dev/react";
import { Header } from '../components';

export default function Home() {
  return (
    <section className="swap">
        <Header />
      <ConnectWallet accentColor="#f213a4" colorMode="dark" />
    </section>
  );
}