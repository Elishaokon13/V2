import { BridgesApp } from '@brgx/widget';
import { Socials } from "../components";



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
