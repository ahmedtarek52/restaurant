// import React from 'react'
import HeroImg from "../../assets/hero.png"
import HeroBg from "../../assets/heroBg.png"
import PrimaryButton from "../Shared/PrimaryButton"


const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
}

const Hero = () => {
  return (
    <>
    <div className="relative z-[-1]" style={BgStyle}>
        <div className="relative z-[-1] ">
            <div className="container py-16 sm:py-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                    <div className="space-y-7 order-2 sm:order-1 text-dark">
                        <h1 className="text-5xl" data-aos="fade-up">
                        Fresh & Healthy Meal Plan <span className="text-7xl font-cursive text-secondary">Delivery</span>  in Miami
                        </h1>
                        <p className="lg:pr-64" data-aos="fade-up" data-aos-delay="300">
                        Delicious Meals Delivered to Your Door From $132.95 per week
                        </p>
                        <div data-aos="fade-up" data-aos-delay="500">
                            <PrimaryButton/>
                        </div>
                    </div>
                    <div className="relative z-30 order-1 sm:order-2" data-aos="zoom-in" data-aos-delay="500">
                        <img src={HeroImg} alt="" className="w-full sm:scale-125 sm:translate-y-16" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    </>
  )
}

export default Hero