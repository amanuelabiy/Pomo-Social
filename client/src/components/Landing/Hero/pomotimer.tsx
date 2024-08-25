import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { IoAddCircleSharp } from "react-icons/io5";
import { useTheme } from "next-themes";

function PomoTimer() {
  const [time, setTime] = useState(`25:00`);
  const [toDos, setToDos] = useState(["create pomo social account"]);

  const lightModeCard = "0,0%,100%";
  const darkModeCard = "220,18%,20%";
  const darkModeInnerCard = "220,18%,15%";

  const { theme } = useTheme();

  const formatTime = () => {
    return `25:00`;
  };
  return (
    <Card className="flex flex-col rounded-3xl border-none p-4 h-[35rem] w-[20rem] mx-auto mt-[3rem] lg:mx-0 lg:mt-0 lg:ml-auto">
      <CardContent className="flex flex-col justify-between h-full">
        <div className="bg-primary -mx-6 p-4 rounded-xl mb-4">
          <div className="flex p-4 gap-3 justify-center">
            <Button className="bg-transparent border-none text-white outline-none hover:bg-[hsl(24.6,95%,50%)] active:bg-[hsl(24.6,95%,47%)] rounded-none  transition-transform transform hover:scale-105 active:scale-95">
              Focus
            </Button>
            <Button className="bg-transparent border-none text-white outline-none hover:bg-[hsl(24.6,95%,50%)] active:bg-[hsl(24.6,95%,47%)] rounded-none transition-transform transform hover:scale-105 active:scale-95">
              Break
            </Button>
          </div>
          <div className="text-center my-4">
            <h1 className="text-5xl text-white font-extrabold">{time}</h1>
          </div>
          <div className="mx-auto text-center">
            <Button className="hover:bg-[hsl(24.6,95%,25%)] focus:bg-[hsl(24.6,95%,25%)] active:bg-[hsl(24.6,95%,25%)] !bg-[hsl(24.6,95%,25%)] rounded-none transition-transform transform hover:scale-105 active:scale-95">
              <FaPlay /> <p className="m-2">START</p>
            </Button>
          </div>
        </div>
        <p className="text-sm text-gray-500 opacity-80">TODOS</p>
        <div>
          {toDos.map((toDo, index) => (
            //   bg-[hsl(24.6,95%,50%)]
            <Button
              className={`border-none rounded-sm p-5 bg-[hsl(${
                theme === "dark" ? darkModeInnerCard : lightModeCard
              })`}
              key={index}
            >
              {toDo}
            </Button>
          ))}
        </div>
        <div className="relative mt-auto">
          <Input
            placeholder="add a task"
            className="bg-inner-card bg-inner-card"
          ></Input>
          <IoAddCircleSharp
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer active:transition-transform  hover:scale-105 active:scale-95"
            size={20}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default PomoTimer;
