"use client";

import Navbar from "@/components/Landing/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaArrowRight } from "react-icons/fa6";
import { signIn } from "next-auth/react";


import { Label } from "@/components/ui/label";
import Link from "next/link";

function Login() {
  const [showEmailForm, setShowEmailForm] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-center mt-[1rem]">
        <Navbar />
      </div>

      <div>
        <h1 className="text-4xl text-gray-500 font-extrabold text-center mt-[4rem] tracking-tighter">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 text-center mt-2 text-lg">
          Time to <span className="font-extrabold">focus.</span>
        </p>
      </div>

      <div className="flex justify-center">
        <Card className="flex flex-col gap-5 p-4 rounded-3xl w-[35rem] shadow-lg border-none text-center mt-5">
          <Button
            className="bg-white text-black font-semibold text-md p-7 hover:bg-gray-100 transition-transform transform hover:scale-[1.02] active:scale-[.98] border-[1px] border-gray-500"
            onClick={() => signIn()}
          >
            <FcGoogle className="mr-4 text-2xl" />
            SIGN UP WITH GOOGLE
          </Button>
          <Button className="bg-black text-white font-semibold text-md p-7 hover:bg-[hsl(1,0%,5%)] transition-transform transform hover:scale-[1.02] active:scale-[.98]">
            <FaApple className="mr-4 text-2xl" />
            SIGN UP WITH APPLE
          </Button>
          <Button className="bg-blue-600 text-white font-semibold text-md p-7 hover:bg-blue-500 transition-transform transform hover:scale-[1.02] active:scale-[.98]">
            <FaFacebookSquare className="mr-4 text-2xl" />
            SIGN UP WITH FACEBOOK
          </Button>
          <div className="flex flex-row items-center">
            <hr className="border-gray-500 flex-grow" />
            <p className="text-gray-500 mx-3 font-bold">OR</p>
            <hr className="border-gray-500 flex-grow" />
          </div>

          {showEmailForm ? (
            <form className="flex flex-col gap-3">
              <Input className="p-7" placeholder="Username" required></Input>
              <Input
                type="email"
                className="p-7"
                placeholder="Email"
                required
              ></Input>
              <Input
                type="password"
                className="p-7"
                placeholder="Password"
                required
              ></Input>
              <Button className="font-semibold text-md p-7 transition-transform transform hover:scale-[1.02] active:scale-[.98]">
                <p className="mr-2">SIGN UP</p>
                <FaArrowRight className="text-xl" />
              </Button>
            </form>
          ) : (
            <Button
              className="font-semibold text-md p-7 transition-transform transform hover:scale-[1.02] active:scale-[.98]"
              onClick={() => setShowEmailForm(true)}
            >
              <MdEmail className="mr-4 text-2xl" />
              SIGN UP WITH EMAIL
            </Button>
          )}
        </Card>
      </div>
      <h1 className="text-center mt-7">
        <span className="font-extrabold text-gray-500">
          Already have an account?
        </span>{" "}
        <Link href="/login">
          <span className="text-decoration-line: underline text-gray-500">
            Login
          </span>
        </Link>
      </h1>
    </div>
  );
}

export default Login;
