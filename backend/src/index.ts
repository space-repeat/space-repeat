import "dotenv/config"
import app from "./server";

const PORT = process.env.PORT;


if (!PORT) {
  throw new Error("Please define PORT in .env.local");
}


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})