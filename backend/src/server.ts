import express, { Response } from "express";
import cors from "cors";

const app = express();

// loading middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// welcome route on /
app.get("/", (_, res : Response) => {
  res.json({msg : "Welcome"})
})

export default app;