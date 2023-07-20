import "dotenv/config"
import app from "./server";


declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL:string
    }
  }
}

const PORT = Number(process.env.PORT);

if (!PORT) {
  throw new Error("Please define PORT in .env");
}

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})