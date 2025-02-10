import { useNavigate } from "react-router-dom";
import { Phrase } from "../../types";
import { useState } from "react";

export default function Card({
  phrases,
  lang,
}: {
  phrases: Phrase[];
  lang: string | undefined;
}) {
  const [current, setCurrent] = useState(0);
  const [level, setLevel] = useState(0);
  const navigate = useNavigate();

  const getUserIdFromToken = (token: string | null): string | null => {
    if (!token) return null;

    try {
      const payloadBase64 = token.split(".")[1]; // Get the payload part
      const payloadJson = atob(payloadBase64); // Decode Base64
      const payload = JSON.parse(payloadJson); // Convert to object

      return payload.userId || null; // Use userId instead of _id
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

const addprogress = async () => {
  try {
    const token = localStorage.getItem("authtoken");
    const userId = getUserIdFromToken(token);
    if (!userId) {
      console.error("User ID is invalid");
      return;
    }

    const fixedLang = lang?.toLowerCase(); // Ensure lowercase
    console.log("Lang value before request:", fixedLang);

    if (!fixedLang || !["japanese", "korean", "turkish"].includes(fixedLang)) {
      console.error("Invalid lang:", fixedLang);
      return;
    }

    const currentPhrase = phrases[current];
    if (!currentPhrase) {
      console.error("No phrase available");
      return;
    }

    const requestBody = {
      lang: fixedLang,
      phrases: {
        translation: currentPhrase.translation,
        [fixedLang]: {
          native: currentPhrase[fixedLang as keyof Phrase]?.native,
          romanization: currentPhrase[fixedLang as keyof Phrase]?.romanization,
        },
      },
    };

    console.log("Sending request body:", requestBody);

    const response = await fetch(
      `http://localhost:8080/api/users/progress/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`);
    }

    console.log("Progress updated successfully");
  } catch (error) {
    console.error("Error updating progress:", error);
  }
};

  const handleNext = () => {
    if (level >= 2) {
      if (current < phrases.length - 1) {
        setCurrent(current + 1);
        setLevel(0);
        addprogress()
      } else {
        ;
        navigate("/success");
      }
    } else {
      setLevel(level + 1);
    }
  };

  const currentPhrase = phrases[current] || null;
  const translation = currentPhrase?.translation || "N/A";
  const pronunciation = lang && currentPhrase?.[lang as keyof Phrase]?.romanization;
  const nativeText = lang && currentPhrase?.[lang as keyof Phrase]?.native;

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
      <div className="bg-white rounded-lg overflow-hidden mb-10">
        <div className="pt-2 px-4">
          <div className="w-50 bg-secondary h-1"></div>
        </div>
        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
          <h3 className="font-semibold text-dark text-xl mb-4">English</h3>
          <p className="text-base text-body-color leading-relaxed mb-7">{translation}</p>

          <h3 className="font-semibold text-dark text-xl mb-4">Pronunciation</h3>
          <p className="text-base text-body-color leading-relaxed mb-7">
            {level > 0 ? pronunciation || "N/A" : <br />}
          </p>

          <h3 className="font-semibold text-dark text-xl mb-4">{lang}</h3>
          <p className="text-base text-body-color leading-relaxed mb-7">
            {level > 1 ? nativeText || "N/A" : <br />}
          </p>

          <div className="flex justify-between">
            <button
              onClick={() => setLevel(0)}
              className="py-2 px-7 border border-[#E5E7EB] rounded-md text-base text-body-color font-medium hover:border-primary hover:bg-secondary hover:text-white transition"
            >
              Retry
            </button>

            <button
              onClick={handleNext}
              className="py-2 px-7 border border-[#E5E7EB] rounded-md text-base text-body-color font-medium hover:border-primary hover:bg-secondary hover:text-white transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
