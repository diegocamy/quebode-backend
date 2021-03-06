import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";

//IMPORT ROUTES
import movieRoute from "./routes/movies";

const app = express();
const PORT = process.env.PORT || 1234;

app.use(helmet());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://localhost"
        : "http://localhost:3000",
  })
);

app.use("/api/movies", movieRoute);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
