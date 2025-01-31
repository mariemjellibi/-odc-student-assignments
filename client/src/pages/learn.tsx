import { useEffect, useState } from "react";
import Card from "../components/card";
import { useParams } from "react-router-dom";
import { Phrase } from "../../types";

export default function Learn() {
  const { lang } = useParams();

  const [phraseByLang, setPhraseByLang] = useState<Phrase[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/phrases/language/${lang}`)
      .then((response) => response.json())
      .then((data) => setPhraseByLang(data));
  }, []);

  return (
    <section className="pt-6 lg:pt-8 pb-10 lg:pb-20  bg-slate-300 h-screen">
      <div className="">
        <div className="flex justify-center">
          {phraseByLang.length && lang && (
            <Card phrases={phraseByLang} lang={lang} />
          )}
        </div>
      </div>
    </section>
  );
}
