import { Request, Response, Router } from 'express';
import prisma from '../prisma';
import { authMiddleware } from './auth';

export const stackRouter = Router();

const getAllStacks = async (req: Request, res: Response) => {
  const stacks = prisma.stack.findMany();

  

  return res.json({ stacks });
};

stackRouter.get('/', authMiddleware, getAllStacks);
