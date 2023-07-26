import 'dotenv/config';
import app from './server';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      CLERK_JWT_PUBLICK_KEY:string
    }
  }
}

const PORT = Number(process.env.PORT);
const DATABASE_URL = process.env.DATABASE_URL;

if (!PORT) {
  throw new Error('Please define PORT in .env');
}

if (!DATABASE_URL) {
  throw new Error('Please define DATABASE_URL in .env');
}

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
