import express, { Response } from "express";
import cors from "cors";
import stacksRouter from "./routers/stacksRouter";
import morgan from "morgan"

const app = express();

// loading middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// route splitting

app.use("/api/v1/stacks", stacksRouter)


// welcome route on /
app.get("/", (_, res : Response) => {
  res.json({msg : "Welcome"})
})

export default app;