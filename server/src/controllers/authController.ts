import { Request, Response } from "express";
import prismaClient from "../utils/db";
import { hashSync } from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  let user = await prismaClient.user.findFirst({ where: { email: email } });
  if (user) {
    throw Error("User Already Exists");
  }

  user = await prismaClient.user.create({
    data: {
      username,
      email,
      password: hashSync(password, 10),
      habits: [],
      friends: [],
    },
  });
  res.json(user);
};
