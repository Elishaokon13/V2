import { Navbar } from "../components";
import { BridgesApp } from '@brgx/widget';   // import the widget


export default function Swap() {
    return (
        <section className="hero">
            {/* <Navbar /> */}
            <div className="justify-center items-center ml-20 flex flex-col">
            <BridgesApp />   // add the widget to the page
            </div>
        </section>
    );
}
