import connection from "../database";
import mongoose from "mongoose";

const phrasesSchema = new mongoose.Schema({
  translation: { type: String, required: true },
  japanese: {
    native: { type: String, required: true },
    romanization: { type: String, required: true },
  },
  korean: {
    native: { type: String, required: true },
    romanization: { type: String, required: true },
  },
  turkish: {
    native: { type: String, required: true },
    romanization: { type: String, required: true },
  },
});

const Phrases = mongoose.model("Phrases", phrasesSchema);

export default Phrases;
