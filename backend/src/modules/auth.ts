import { WebhookEvent, decodeJwt } from '@clerk/clerk-sdk-node';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';


export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  console.log(token)

  if (typeof token === 'undefined' || !token) {
    return res
      .status(403)
      .json({ error: 'You are not are not allowed to perform this action.' });
  }
  try {
    // const payload = jwt.verify(token, process.env.CLERK_JWT_PUBLICK_KEY);
    const payload = decodeJwt(token)
    // @ts-ignore
    req.user = payload.payload.sub;
  } catch (e) {
    console.error(e);
    return res.status(498).json({ error: 'Invalid token' });
  }

  next();
};

export const clerkWebhookHandler = async (req: Request, res: Response) => {
  const evt = req.body.evt as WebhookEvent;

  switch (evt.type) {
    case 'user.created':
      const {
        primary_email_address_id: email,
        id,
        first_name,
        last_name,
      } = evt.data;

      const newUser = await prisma.user.create({
        data: {
          email,
          id,
          name: first_name + last_name,
        },
      });

      return res.status(201).send('User created successfully');
  }
};
