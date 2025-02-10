import { Request, Response } from "express";
import Phrases from "../models/Phrase";

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
    const phrases = await Phrases.find(  { [`${lang}`]: { $exists: true }});
    // const phrases = await Phrases.find({`${lang}`});
    if (phrases.length > 0) {
      res.send({
        success: true,
        phrases,
        message: "Phrases retrieved successfully",
      });
    } else {
      res.status(404).send({
        success: false,
        message: "No phrases found for the specified language",
      });
    }
  } catch (error) {
    console.error(error); // Ajouté pour un meilleur débogage
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

// export const GetPhrasesByLanguage = async (req: Request, res: Response) => {
//   const { lang } = req.params;
//   console.log("Requested language:", lang);
//   try {
//     const phrases=await Phrases.find({});//bring all the data
//         // const phrases = await Phrases.find({}, `translation languages.${lang}`);
//    //la méthode .map va retourner un tableau de meme taille que l'initiale mais avec les données filtrées(cad meme nombre de lignes mais nbr de colonnes différents)
//         const filteredPhrases = phrases.map((phrase) => {
//       const languageData = phrase.languages.find((l) => l.name === lang); // trouver le bon langage selon le req.body 
//       return {
//         _id: phrase._id,
//         translation: phrase.translation,
//         language: languageData || null, 
//       };
//     });
// //ici on n'utilise pas .filter car elle va retourner un tableau de taille inférieure a celui 
//     res.send(filteredPhrases);
//   } catch (error) {
//     console.error("Error fetching phrases by language:", error);

//     res.send({ message: "internal server error" });
//   }
// };


export const addPhrase = async (req: Request, res: Response) => {
 try {
 //  console.log(req.body);
   const existingPhrase = await Phrases.findOne({translation: req.body.translation});
   if( existingPhrase){
    res.send({message: "Phrase already exists"})  
   }
   const newPhrase = await Phrases.create(req.body);
   newPhrase.save();
   res.send({ message: "Phrase added successfully" ,newPhrase});
 }catch (error) {
  res.send({ message: "internal server error" });
 }
}
// export const addLanguage = async (req: Request, res: Response): Promise<void> => {
//   const { translation, name, native, romanization } = req.body;

//   try {
//     // Recherche de la phrase
//     const phrase = await Phrases.findOne({ translation });

//     if (!phrase) {
//       res.status(404).json({ message: "Phrase does not exist" });
//       return;
//     }

//     // Vérifier si la langue existe déjà
//     const languageData = phrase.languages.find((l) => l.name === name);
//     if (languageData) {
//       res.status(400).json({ message: "Language already exists" });
//       return;
//     }

//     // Ajouter la nouvelle langue
//     phrase.languages.push({ name, native, romanization });
//     await phrase.save();

//     res.status(200).json({
//       message: `Language '${name}' added successfully to phrase`,
//       phrase, 
//     });
//   } catch (error) {
//     console.error("Error adding language:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };