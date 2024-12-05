"use client"
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import gsap from "gsap";
import animationData from "../assets/Animation - 1733037100823.json"
import {useEffect, useRef, useState} from "react";

const LottieAnimation=()=>{
    const animationRef = useRef<LottieRefCurrentProps>(null); //get ref
    const [isAnimating, setIsAnimating] = useState(true); // set to true

    //gsap animation {essentially I want the animation to flow form the bottom of the page to the mid-point}
    //* Have to use useEffect to hook into the lifecycle of the lottie animation, (before it was rendering and then trying the animation which won't work)
    useEffect(() => {
        if (animationRef.current) {
            gsap.fromTo(
                "#content", // Target the parent div instead of the Lottie component NOTE: # means the div id.
                {
                    y: 200,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.0,
                    ease: "power1.inOut",
                }
            );
        }
    }, []);

    return(
        <div id={"content"}>
            <Lottie  id="lottie-animation" lottieRef={animationRef} loop={false} animationData={animationData}
                     style={{ width: 600, height: 600 }}
                     onComplete={() => {
                setIsAnimating(!isAnimating);
                // this allows us to give it an idle animation so it will toggle between going forwards and backwards
                animationRef.current?.setDirection(isAnimating ? -1 : 1);
                animationRef.current?.play();
            }}/>
        </div>
    )
}
export default LottieAnimation;