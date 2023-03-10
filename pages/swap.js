import { Navbar } from "../components";
import { BridgesApp } from '@brgx/widget';   // import the widget
import { Footer } from "../containers";


export default function Swap() {
    return (
        <section className="hero">
            <Navbar />
            <div className="justify-center items-center mt-20 ml-20 flex flex-col">
            <BridgesApp /> 
            </div>
            <Footer />
        </section>
    );
}
