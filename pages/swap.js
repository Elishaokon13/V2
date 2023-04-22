
import { PoodlApp } from '@poodl/widget';
import { Header } from '../components';

export default function Swap() {
    return (
        <section className="swap">
            <Header />
            <h1 className="swap__title">Limitless Network Swap</h1>
            <div className="mt-20 ml-20 text-center justify-center">
                <PoodlApp
                    predefinedTokens={[

                        {

                            address: "0xc13cbf50370e5eae6f5dd9d8a1015007f34c4ead",

                            chainId: 56,

                            decimals: 18,

                            hasTransactonFees: true,

                            logoURI: "https://github.com/Elishaokon13/Limitless-Network-V2/blob/master/assets/images/Logo.png",

                            name: "Limitless Network Token",

                            symbol: "LNT"

                        }

                    ]}

                defaultPinnedTokens={{

                    56: [

                        "0xc13cbf50370e5eae6f5dd9d8a1015007f34c4ead"

                    ]

                }}

                defaultSelectedTokenByChains={{

                    56: {

                        defaultInputToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",

                        defaultOutputToken: "0xc13cbf50370e5eae6f5dd9d8a1015007f34c4ead"

                    }

                }}
                />
            </div>
        </section>
    );
}
