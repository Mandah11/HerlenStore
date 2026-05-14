import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { categoryRouter } from "./routes/category.route";
import { dishRouter } from "./routes/dish.route";
import { orderRouter } from "./routes/order.route";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use("/categories", categoryRouter);
app.use("/dishes", dishRouter);
app.use("/orders", orderRouter);
app.get("/", (_req, res) => {
  res.json({ message: "Backend is running." });
});

mongoose
  .connect(
    "mongodb+srv://herlenshomestore_db_user:q9gk2kYvZyjPKSQ9@homestore.ko7yrdw.mongodb.net/HomeStore?appName=HomeStore",
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
