"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { IoAddCircleSharp } from "react-icons/io5";
import { useTheme } from "next-themes";
import { GrPowerReset } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

interface ToDo {
  id: string;
  toDo: string;
  completed: boolean;
}

const setTimerAmount = (timeInMinutes: number) => {
  return timeInMinutes * 60000;
};

function PomoTimer() {
  const [timerIsRunning, setIsTimerRunning] = useState<boolean>(false);
  const startTime = useRef(setTimerAmount(25));
  const [timeLeft, setTimeLeft] = useState(setTimerAmount(25));
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [currentToDo, setCurrentToDo] = useState<string>("");
  const { theme } = useTheme();

  useEffect(() => {
    if (timerIsRunning && timeLeft > 0) {
      const timerInterval = setInterval(() => {
        startTime.current -= 1000;

        setTimeLeft(startTime.current);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timerIsRunning, timeLeft]);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    document.title = "Pomo-Social";
    setIsTimerRunning(false);
    startTime.current = setTimerAmount(25);
    setTimeLeft(setTimerAmount(25));
  };

  const formatTime = (timeInMilliSeconds: number) => {
    const timeInSeconds = timeInMilliSeconds / 1000;

    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.floor(timeInSeconds % 60);

    if (timerIsRunning) {
      document.title = `${
        minutes < 10 ? minutes.toString().padStart(2, "0") : minutes
      }:${seconds < 10 ? seconds.toString().padStart(2, "0") : seconds}`;
    }

    return `${minutes < 10 ? minutes.toString().padStart(2, "0") : minutes}:${
      seconds < 10 ? seconds.toString().padStart(2, "0") : seconds
    }`;
  };

  const deleteToDo = (id: string) => {
    const newToDos = toDos.filter((toDo) => toDo.id != id);
    setToDos(newToDos);
  };

  const setToDoComplete = (id: string) => {
    const newToDos = toDos.map((toDo) =>
      id === toDo.id ? { ...toDo, completed: true } : toDo
    );
    setToDos(newToDos);
  };

  const resetToDoList = () => {
    setToDos([]);
    setCurrentToDo("");
  };

  const addTask = () => {
    if (currentToDo !== "" && toDos.length < 4) {
      setToDos([
        ...toDos,
        { id: uuidv4(), toDo: currentToDo, completed: false },
      ]);
      setCurrentToDo("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentToDo(e.target.value);
  };

  return (
    <Card
      className={`flex flex-col w-[100%] rounded-2xl shadow-2xl border-none mt-4 mx-auto lg:mx-0 lg:ml-auto md:w-[60%] lg:w-[30rem] ${
        timeLeft === 0 && timerIsRunning && "animate-shake"
      }`}
    >
      <CardHeader className="bg-primary rounded-t-2xl pb-9">
        <div>
          <CardTitle className="text-center text-primary-foreground text-4xl mt-4">
            Pomo-Timer
          </CardTitle>
        </div>
        <div>
          <h1
            className={`text-8xl font-extrabold text-primary-foreground text-center mt-4 ${
              timeLeft === 0 && timerIsRunning && "animate-shake"
            }`}
          >
            {formatTime(timeLeft)}
          </h1>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 rounded-t-2xl rounded-b-2xl -mt-6 bg-card h-[100%]">
        <div className="flex flex-row justify-center gap-4 rounded-t-3xl rounded-b-3xl mt-6 p-4">
          {timerIsRunning ? (
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg active:scale-95"
              onClick={stopTimer}
            >
              <FaPause className="mr-2" />
              Stop
            </Button>
          ) : (
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 text-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg active:scale-95"
              onClick={startTimer}
            >
              <FaPlay className="mr-2" />
              Start
            </Button>
          )}

          <Button
            className={`${
              theme === "dark" ? "bg-[color:hsl(220,18%,18%)]" : "bg-white"
            }  ${
              theme === "dark"
                ? "text-white"
                : "text-orange-500 hover:bg-orange-100"
            } ${
              theme === "dark" ? "hover:bg-[color:hsl(220,18%,18%)]" : ""
            } border-orange-500 rounded-full px-6 py-2 text-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg active:scale-95`}
            onClick={resetTimer}
          >
            <GrPowerReset className="font-extrabold mr-2" />
            Reset
          </Button>
        </div>
        <div className="flex flex-row gap-4">
          <Input
            value={currentToDo}
            onChange={handleChange}
            placeholder="Add a todo"
            className={`${
              theme === "dark" ? "bg-[color:hsl(220,18%,18%)]" : ""
            }`}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          ></Input>
          <Button
            className="transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg"
            onClick={addTask}
          >
            Add Task
          </Button>
        </div>
        {toDos.length > 0 ? (
          <ul className="space-y-2">
            <GrPowerReset
              onClick={resetToDoList}
              className="text-primary ml-auto hover:cursor-pointer"
            />
            {toDos.map((toDo) => (
              <li
                className={`flex flex-row justify-between ${
                  theme === "dark"
                    ? "bg-[color:hsl(220,18%,18%)]"
                    : "bg-gray-100"
                } p-3 rounded-3xl`}
                key={toDo.id}
              >
                <p
                  className={`${
                    toDo.completed &&
                    "text-decoration-line: line-through opacity-50"
                  } ml-2`}
                >
                  {toDo.toDo}
                </p>
                <div className="flex flex-row gap-4">
                  <FaCheckCircle
                    onClick={() => setToDoComplete(toDo.id)}
                    className="text-primary text-xl hover:cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg"
                  />
                  <FaTrashAlt
                    onClick={() => deleteToDo(toDo.id)}
                    className="text-primary text-xl hover:cursor-pointer  transition-all duration-200 ease-in-out transform hover:scale-110 shadow-lg"
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default PomoTimer;

// return (
//   <Card className="flex flex-col rounded-3xl border-none p-4 h-[35rem] w-[20rem] mx-auto mt-[3rem] lg:mx-0 lg:mt-0 lg:ml-auto">
//     <CardContent className="flex flex-col justify-between h-full">
//       <div className="bg-primary -mx-6 p-4 rounded-xl mb-4">
//         <div className="flex p-4 gap-3 justify-center">
//           <Button className="bg-transparent border-none text-white outline-none hover:bg-[hsl(24.6,95%,50%)] active:bg-[hsl(24.6,95%,47%)] rounded-none  transition-transform transform hover:scale-105 active:scale-95">
//             Focus
//           </Button>
//           <Button className="bg-transparent border-none text-white outline-none hover:bg-[hsl(24.6,95%,50%)] active:bg-[hsl(24.6,95%,47%)] rounded-none transition-transform transform hover:scale-105 active:scale-95">
//             Break
//           </Button>
//         </div>
//         <div className="text-center my-4">
//           <h1 className="text-5xl text-white font-extrabold">{time}</h1>
//         </div>
//         <div className="mx-auto text-center">
//           <Button className="hover:bg-[hsl(24.6,95%,25%)] focus:bg-[hsl(24.6,95%,25%)] active:bg-[hsl(24.6,95%,25%)] !bg-[hsl(24.6,95%,25%)] rounded-none transition-transform transform hover:scale-105 active:scale-95">
//             <FaPlay /> <p className="m-2">START</p>
//           </Button>
//         </div>
//       </div>
//       <p className="text-sm text-gray-500 opacity-80">TODOS</p>
//       <div>
//         {toDos.map((toDo, index) => (
//           //   bg-[hsl(24.6,95%,50%)]
//           <Button
//             className={`border-none rounded-sm p-5 bg-[hsl(${
//               theme === "dark" ? darkModeInnerCard : lightModeCard
//             })`}
//             key={index}
//           >
//             {toDo}
//           </Button>
//         ))}
//       </div>
//       <div className="relative mt-auto">
//         <Input
//           placeholder="add a task"
//           className="bg-inner-card bg-inner-card"
//         ></Input>
//         <IoAddCircleSharp
//           className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer active:transition-transform  hover:scale-105 active:scale-95"
//           size={20}
//         />
//       </div>
//     </CardContent>
//   </Card>
// );
