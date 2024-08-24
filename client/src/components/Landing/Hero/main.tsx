"use client";

import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="flex">
      <div className="flex flex-col mt-[6rem] ml-6">
        <h1 className="text-center text-6xl font-extrabold tracking-tight lg:text-left">
          Master Time
        </h1>
        <h1 className="text-6xl font-extrabold text-primary mt-4 tracking-tight text-center underline decoration-dashed decoration-primary underline-offset-8 lg:text-left">
          enter flow state
        </h1>
        <div className="mt-6">
          <p className="text-center text-xl text-secondary-foreground text-gray-500 opacity-50 font-bold lg:text-left">
            <TypeAnimation
              sequence={[
                "Get Someone To Hold You Accountable!",
                2000,
                "Stay motivated together!",
                2000,
                "Achieve with every minute!",
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </p>
        </div>
        <div className="mx-auto lg:mx-0">
          <Button className="w-[8rem] p-6 mt-7 font-extrabold ">
            Let's Focus
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
