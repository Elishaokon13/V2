import { GoogleAnalytics } from "nextjs-google-analytics";
import '../styles/globals.scss';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function App({ Component, pageProps }) {
	return (
		<>
      <ThirdwebProvider activeChainId={activeChainId}>
      <GoogleAnalytics gaMeasurementId="UA-249910106-1" />
      <Component {...pageProps} />
      </ThirdwebProvider>
    </>
	)
}

export default App;
