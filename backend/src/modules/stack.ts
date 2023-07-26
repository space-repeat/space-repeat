import { Request, Response, Router } from 'express';
import prisma from '../prisma';

export const stackRouter = Router();

// ----- CONTROLLERS---------
// @ashishsurya

const getAllStacks = async (req: Request, res: Response) => {
  const stacks = prisma.stack.findMany();

  return res.json({ stacks });
};

stackRouter.get('/', getAllStacks);
