import { Request, Response, Router } from 'express';
import prisma from '../prisma';
import { authMiddleware } from './auth';

export const stackRouter = Router();

const getAllStacks = async (req: Request, res: Response) => {
  // @ts-ignore
  const user = req.user;
  console.log(user);
  const stacks = prisma.stack.findMany();

  return res.json({ stacks, user });
};

stackRouter.get('/', authMiddleware, getAllStacks);
