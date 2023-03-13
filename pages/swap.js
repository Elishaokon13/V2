import { Navbar } from "../components";
import { BridgesApp } from '@brgx/widget';   // import the widget
import { Footer } from "../containers";
import { Blur, Navbar, Seo, Socials } from '../components';
import { Eclipses } from '../containers';


export default function Swap() {
    return (
        <section className="hero">
            <Seo />
            <div className="justify-center items-center mt-20 ml-20 flex flex-col">
            <BridgesApp /> 
            <Socials isSlider={true} />
            </div>
        </section>
    );
}
