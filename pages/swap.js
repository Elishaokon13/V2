
import { PoodlApp } from '@poodl/widget';
import { Header } from '../components';

export default function Swap() {
    return (
        <section className="swap">
            <Header />
            <h1 className="swap__title">Limitless Network Swap</h1>
            <div className="mt-20 ml-20 text-center justify-center">
                <PoodlApp />
            </div>
        </section>
    );
}
