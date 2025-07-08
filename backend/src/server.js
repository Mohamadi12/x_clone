import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import useRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware);

// routes
app.use("/api/user", useRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running: http://localhost:${ENV.PORT}`);
  connectDB();
});
