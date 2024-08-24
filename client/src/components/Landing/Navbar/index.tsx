"use client";

import { FaClock } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const controls = useAnimation();

  const handleThemeClick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const handleClockClick = async () => {
    // Trigger the shake animation
    await controls.start({
      x: [0, -4, 4, -4, 4, 0], // Define shake movement
      transition: { duration: 0.5 },
    });
  };

  const iconVariants = {
    enter: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  const themeAnimation = {
    opacity: [0, 1],
    scale: [0.8, 1],
    transition: { duration: 0.3 },
  };
  return (
    <Card className="flex gap-5 p-4 rounded-3xl w-[35rem] justify-between shadow-lg border-none">
      <div
        className={`${
          theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-500"
        } p-3 rounded-xl`}
        onClick={handleClockClick}
      >
        <motion.div animate={controls}>
          <FaClock className="text-primary text-2xl" />
        </motion.div>
      </div>
      <div
        className={`${
          theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-500"
        } p-3 rounded-xl`}
      >
        <h1 className="text-xl font-extrabold">Pomo Social</h1>
      </div>
      <div
        className={`${
          theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-500"
        } p-3 rounded-xl`}
        onClick={handleThemeClick}
      >
        {theme === "light" ? (
          <motion.div
            initial="exit"
            animate={themeAnimation}
            exit="exit"
            variants={iconVariants}
          >
            <IoMoonOutline className="text-2xl" />
          </motion.div>
        ) : (
          <motion.div
            initial="exit"
            animate={themeAnimation}
            exit="exit"
            variants={iconVariants}
          >
            <MdOutlineWbSunny className="text-2xl" />
          </motion.div>
        )}
      </div>
    </Card>
  );
}

export default Navbar;
