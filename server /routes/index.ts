import express, { Request, Response } from "express";
import {
  GetAllPhrases,
  GetPhrasesByLanguage,
} from "../controllers/phrasesController";
const router = express.Router();

router.get("/", GetAllPhrases);
router.get("/language/:lang", GetPhrasesByLanguage);

export default router;
