import { useState } from "react";

type Phrases = {
  translation: string;
  korean?: { native: string; romanization: string };
  japanese?: { native: string; romanization: string };
  turkish?: { native: string; romanization: string };
};

const getUserIdFromToken = (token: string | null): string | null => {
  if (!token) return null;
  try {
    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64);
    const payload = JSON.parse(payloadJson);
    return payload.userId || null;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

const GetProgress = () => {
  const [lang, setLang] = useState("");
  const [progress, setProgress] = useState<Phrases[]>([]);

  const fetchProgress = async () => {
    if (!lang) {
      console.error("Please select a language");
      return;
    }

    const token = localStorage.getItem("authtoken");
    const userId = getUserIdFromToken(token);

    if (!userId) {
      console.error("Invalid User ID");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/users/getprogress/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${await response.text()}`);
      }

      const data = await response.json();
      setProgress(data[lang] || []);
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  return (
    <div className="p-6">
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="border p-2"
      >
        <option value="">Select a language</option>
        <option value="japanese">Japanese</option>
        <option value="korean">Korean</option>
        <option value="turkish">Turkish</option>
      </select>

      <button
        onClick={fetchProgress}
        className="ml-4 p-2 bg-blue-500 text-white"
      >
        Fetch Progress
      </button>

      <div className="mt-4">
        {progress.length > 0 ? (
          <ul>
            {progress.map((item, index) => (
              <li key={index} className="border-b p-2">
                {item.translation} - {item[lang]?.native || "N/A"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No progress found.</p>
        )}
      </div>
    </div>
  );
};

export default GetProgress;
