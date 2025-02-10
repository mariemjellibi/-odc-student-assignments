import connection from "../database";
import mongoose from "mongoose";

const phrasesSchema = new mongoose.Schema({
  translation: { type: String, required: true },
  japanese: {
    native: { type: String, required: false },
    romanization: { type: String, required: false },
  },
  korean: {
    native: { type: String, required: false },
    romanization: { type: String, required: false },
  },
  turkish: {
    native: { type: String, required: false },
    romanization: { type: String, required: false },
  },
  // languages:[
  //   {
  //     name: { type: String, required: true }, 
  //     native: { type: String, required: true },
  //     romanization: { type: String, required: true },
  //   }
  // ]
 
});

const Phrases = mongoose.model("Phrases", phrasesSchema);

export default Phrases;