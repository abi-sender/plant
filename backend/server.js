import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import cartRoutes from "./routes/cartRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Use cart routes
app.use("/", cartRoutes);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});