import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Api routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import partnerRoutes from "./routes/partnerRoutes.js";

// App config
const app = express();
dotenv.config();
const port = process.env.PORT || 8080;
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Api endpoints
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/partners", partnerRoutes);

// Listener
app.listen(port, () => console.log(`Server is listening in port ${port}`));