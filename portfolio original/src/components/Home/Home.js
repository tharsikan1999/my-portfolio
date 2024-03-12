import React from 'react'
import home_banner from '../../assets/Image/home-banner.png'
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    return (
        <React.Fragment>
            {/*----- Start Home -----*/}
            <section className="pt-[120px] pb-[80px] lg:pt-[180px] lg:pb-[100px] bg-orange-50 relative overflow-hidden" id="home">
                <div className="container relative z-[1]">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
                        <div className="lg:col-span-6">
                            <div className="text-center lg:text-start mb-14 lg:mb-0">
                                <h6 className="uppercase text-sm md:text-base tracking-[2px] font-semibold mb-5 md:mb-8">👋, My name is Krinky</h6>
                                <h1 className="font-semibold text-[40px] md:text-7xl leading-[1] mb-6 md:mb-9">
                                    I'm a  <TypeAnimation sequence={["Developer", 3000, "Designer", 3000,]} speed={5} repeat={Infinity} />
                                </h1>
                                <p className="text-base text-slate-700/80 md:text-xl mb-2 md:mb-4">Based in Los Angeles, California.</p>
                                <div className="pt-3">
                                    <a href="#Contact" className="btn btn-theme">Let's Start</a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="home-image text-center">
                                <img src={home_banner} title="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----- End Home -----*/}
        </React.Fragment>
    )
}

export default Home
