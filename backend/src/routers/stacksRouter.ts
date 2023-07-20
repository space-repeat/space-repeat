import { Router } from "express";
import { getAllStacks } from "../controllers/stacks";
import { authMiddleware } from "../middlewares";

const stacksRouter = Router();

stacksRouter.get("/" , authMiddleware ,getAllStacks)




export default stacksRouter;