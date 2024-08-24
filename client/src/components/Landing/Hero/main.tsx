"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

import Rating from "@mui/material/Rating";

function Hero() {
  return (
    <div className="flex">
      <div className="flex flex-col mt-[6rem] ml-6">
        <h1 className="text-center text-6xl font-extrabold tracking-tight lg:text-left">
          Master Time
        </h1>
        <h1 className="text-6xl font-extrabold text-primary mt-4 tracking-tight text-center underline decoration-dashed decoration-primary underline-offset-8 lg:text-left">
          enter flow state.
        </h1>
        <div className="mt-6">
          <p className="text-center text-xl text-secondary-foreground text-gray-500 opacity-50 font-bold lg:text-left">
            <TypeAnimation
              sequence={[
                "Hold your Friends Accountable",
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

        <div className="flex gap-4 mx-auto mt-9 lg:mx-0">
          <Button className="w-[8rem] p-6 font-extrabold transition-transform transform hover:scale-105 active:scale-95 shadow-lg">
            Let's Focus
          </Button>
          <Button className="w-[8rem] p-[1.25rem] font-extrabold border-primary border-4 bg-white text-black hover:bg-gray-400 transition-transform transform hover:scale-105 active:scale-95 shadow-lg">
            Features
          </Button>
        </div>
        <div className="flex flex-col gap-6 items-center lg:flex-row">
          <div className="flex -space-x-4 mt-9 mx-auto lg:mx-0">
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage
                src="/assets/images/profile-picture-1.jpg"
                alt="User 1"
              />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage
                src="/assets/images/profile-picture-2.jpg"
                alt="User 2"
              />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage
                src="/assets/images/profile-picture-3.png"
                alt="User 3"
              />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage
                src="/assets/images/profile-picture-4.jpg"
                alt="User 3"
              />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage
                src="/assets/images/profile-picture-5.jpg"
                alt="User 3"
              />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </div>
          <Rating
            className="mt-6"
            name="read-only"
            value={4.55}
            readOnly
            precision={0.01}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
