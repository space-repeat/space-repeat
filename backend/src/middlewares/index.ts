import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token === 'undefined' || !token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
  } else {
    const payload = jwt.decode(token);

    // @ts-ignore
    req.user = payload;
    next();
  }
};
