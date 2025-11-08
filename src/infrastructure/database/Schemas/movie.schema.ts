import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: String,
  runtime_minutes: Date,
  genre: String,
  releaseDate: Date,
  description: String,
  rating: Number,
  reviews: [{ user: String, comment: String }],
});

export const MovieModel = mongoose.model("Movie", MovieSchema);
