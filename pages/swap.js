import { Navbar } from "../components";
import { BridgesApp } from '@brgx/widget';   // import the widget


export default function Swap() {
    return (
        <div>
            <Navbar />
            <div className="justify-center items-center flex flex-col">
            <BridgesApp />   // add the widget to the page
            </div>
        </div>
    );
}
