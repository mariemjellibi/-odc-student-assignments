import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken";

import Phrases from "../models/Phrase";
export const register = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(400).json({ message: "User already exists" });
        return;
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });
  
      res.status(201).json({
        message: "Utilisateur créé avec succès",
        token: generateToken(user._id.toString()),
        user,
      });
    } catch (error) {
      console.error(error); // ✅ Log error for debugging
      res.status(500).json({ message: "Erreur serveur" });
    }
  };

  export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ message: "Utilisateur introuvable" });
        return;
      }
  
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        res.status(400).json({ message: "Mot de passe incorrect" });
        return;
      }
  
      res.status(200).json({
        message: "Connexion réussie",
        token: generateToken(user._id.toString()),
        user,
      });
    } catch (error) {
      console.error(error); // ✅ Log error for debugging
      res.status(500).json({ message: "Erreur serveur" });
    }
  };
  export const setProgress = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const { lang, phrases } = req.body;
  
    try {
      // Find the user by userId
      const user = await User.findById(userId);
      if (!user) {
        res.status(400).json({ message: "Utilisateur introuvable" });
        return;
      }
  
      // Validate the provided language is correct
      if (!['japanese', 'korean', 'turkish'].includes(lang)) {
        res.status(400).json({ message: "Langue invalide" });
        return;
      }
  
      // Ensure the required fields exist for the chosen language
      if (!phrases || !phrases[lang] || !phrases[lang].native || !phrases[lang].romanization) {
        res.status(400).json({ message: `Missing required data for ${lang}` });
        return;
      }
  
      // Create the new phrase document based on the structure you've provided
      const newPhrase = await Phrases.create({
        translation: phrases.translation,
        [lang]: {
          native: phrases[lang].native,  // Use dynamic key based on `lang`
          romanization: phrases[lang].romanization
        }
      });
  
      // Update the user's progress with the newly created phrase's ID
      switch (lang) {
        case 'japanese':
          user.japaneseprogress.push(newPhrase._id);
          break;
        case 'korean':
          user.koreanprogress.push(newPhrase._id);
          break;
        case 'turkish':
          user.turkishprogress.push(newPhrase._id);
          break;
        default:
          res.status(400).json({ message: "Langue invalide" });
          return;
      }
  
      // Save the updated user document
      const updatedUser = await user.save();
  
      res.status(200).json({
        message: "Progression mise à jour avec succès",
        user: updatedUser
      });
  
    } catch (error) {
      console.error('Error while updating user:', error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  };
  
  
  
export const getProgress = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.userId;
console.log("here in the controller!!:",userId);
  try {
    const user = await User.findById(userId)
      .populate("koreanprogress")
      .populate("japaneseprogress")
      .populate("turkishprogress");
console.log(user);
    if (!user) {
      res.status(404).json({ msg: "User not found" }); // ✅ No return
      return;
    }

    res.json({
      korean: user.koreanprogress,
      japanese: user.japaneseprogress,
      turkish: user.turkishprogress,
    });// ✅ No return
  } catch (error) {
    res.status(500).json({ msg: "Server error" }); // ✅ No return
  }
};