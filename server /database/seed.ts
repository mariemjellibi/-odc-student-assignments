import Phrases from "../model/Phrase";
import mongoose from "mongoose";
import data from "./data";

const seedDB = () => {
  Phrases.insertMany(data)
    .then(() => {
      console.log("Database seeded successfully");
      mongoose.disconnect();
    })
    .catch((error: mongoose.Error) => {
      console.log("error seeding the database: ", error);
    });
};

seedDB();
