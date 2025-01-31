import {Key} from "react"
export type Phrase = {
  _id: Key;
  translation: String;
  japanese?: { romanization: String; native: String };
  korean?: { romanization: String; native: String };
  turkish?: { romanization: String; native: String };
};
