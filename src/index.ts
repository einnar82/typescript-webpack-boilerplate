import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { testController } from "./controllers/index.controller";

dotenv.config();

const PORT: number = parseInt(process.env.APP_PORT as string, 10) || 4001;

if (!PORT) {
  process.exit(1);
}

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "ok",
  });
});

app.get('/test', testController)

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}


export default app
