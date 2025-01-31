import { Request, Response } from "express";
import Phrases from "../model/Phrase";

export const GetAllPhrases = async (req: Request, res: Response) => {
  try {
    const phrases = await Phrases.find();
    if (phrases.length) {
      res.send({
        success: true,
        phrases,
        message: "Phrases retrieved successfully",
      });
    } else {
      res.status(404).send({
        success: false,
        message: "no data found",
        phrases,
      });
    }
  } catch (error) {
    // throw new Error("Internal server error");
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

export const GetPhrasesByLanguage = async (req: Request, res: Response) => {
  const { lang } = req.params;
  try {
    const phrases = await Phrases.find({}, `translation ${lang}`);
    res.send(phrases);
  } catch (error) {
    res.send({ message: "internal server error" });
  }
};
