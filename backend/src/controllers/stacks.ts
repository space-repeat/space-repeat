import { Request, Response } from 'express';

const getAllStacks = async (req: Request, res: Response) => {
  // @ts-ignore
  const { user } = req;

  res.json({ msg: 'Get all stacks', user });
};

export { getAllStacks };
