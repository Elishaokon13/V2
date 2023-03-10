import { Navbar } from "../components";
import { BridgesApp } from '@brgx/widget';   // import the widget


export default function Swap() {
    return (
        <div>
            <Navbar />
            <BridgesApp />   // add the widget to the page
        </div>
    );
}
