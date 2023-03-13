import { BridgesApp } from '@brgx/widget';

export default function Swap() {
    return (
        <section className="hero">
            <div className="justify-center items-center mt-20 ml-20 flex flex-col">
                <h1 className="text-4xl font-bold">Swap</h1>
                <p className="text-2xl mt-4">Swap your tokens</p>
            </div>
            <div className="mt-20 ml-20">
            <BridgesApp />
            </div>
        </section>
    );
}
