import { Key, useEffect, useState } from "react";

export default function Table() {
  const [data, setData] = useState<
    {
      _id: Key;
      translation: String;
      japanese: { romanization: String; native: String };
      korean: { romanization: String; native: String };
      turkish: { romanization: String; native: String };
    }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/phrases")
      .then((response) => response.json())
      .then((data) => setData(data.phrases));
  }, []);
  return (
    <div className="relative overflow-x-auto w-full p-12">
      <table className="w-full text-md text-left text-gray-500 ">
        <thead className="text-xl text-gray-700 bg-gray-50 border-b-4">
          <tr>
            <th className="px-6 py-3">English</th>
            <th className=" px-6 py-3 ">Japanese</th>
            <th className="px-6 py-3">Korean</th>
            <th className="px-6 py-3">Turkish</th>
          </tr>
        </thead>
        <tbody>
          {data.map((phrase) => (
            <tr key={phrase._id} className="bg-white border-b">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {phrase.translation}
              </th>
              <td className="px-6 py-4">{phrase.japanese.native}</td>
              <td className="px-6 py-4">{phrase.korean.native}</td>
              <td className="px-6 py-4">{phrase.turkish.native}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
