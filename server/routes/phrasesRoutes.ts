import express from "express";
import {
  GetAllPhrases,
  GetPhrasesByLanguage,
  addPhrase,
  // addLanguage
} from "../controllers/phrasesController";
const router = express.Router();

router.get("/", GetAllPhrases);
router.get("/language/:lang", GetPhrasesByLanguage);
router.post("/addPhrases", addPhrase);
// router.post("/addLanguage", addLanguage);

export default router;
