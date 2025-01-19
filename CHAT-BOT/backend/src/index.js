import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server Running PORT " + PORT);
  connectdb();
});
