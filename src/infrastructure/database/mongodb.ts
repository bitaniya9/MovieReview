import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectMongoDB() {
  try {
    const dbName = "moviereview";
    const connect = await mongoose.connect(process.env.DATABASE_URL + dbName);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("Could not connect to MongoDB");
    process.exit(1); //stop server when problem
  }
}
