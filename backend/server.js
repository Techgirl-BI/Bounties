import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Bounties API is running...")
})

app.use("/api/auth", authRoutes);

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected successfull"))
.catch((err) => console.log("MongoDb connection error", err.message))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});







