import { useNavigate } from "react-router-dom";
import { Phrase } from "../../types";
import { useState } from "react";
export default function Card({
  phrases,
  lang,
}: {
  phrases: Phrase[];
  lang: String | undefined;
}) {
  const [current, setCurrent] = useState(0);
  const [level, setLevel] = useState(0);
  const navigate = useNavigate();
  console.log(current);
  console.log(phrases.length);
  return (
    <>
      <div className="w-full md:w-1/2 xl:w-1/3 px-4">
        <div className="bg-white rounded-lg overflow-hidden mb-10">
          <div className="pt-2 px-4">
            <div className={`w-${50} bg-secondary h-1`}></div>
          </div>
          <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h3>
              <span className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                English
              </span>
            </h3>

            <p className="text-base text-body-color leading-relaxed mb-7">
              {phrases[current].translation}
            </p>

            <h3>
              <span className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                Pronounciation
              </span>
            </h3>

            <p className="text-base text-body-color leading-relaxed mb-7">
              {level <= 0 ? (
                <br />
              ) : (
                //  @ts-ignore
                phrases[current][lang as keyof Phrase]?.romanization
              )}
            </p>

            <h3>
              <span className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                {lang}
              </span>
            </h3>

            <p className="text-base text-body-color leading-relaxed mb-7">
              <>
                {level <= 1 ? (
                  <br />
                ) : (
                  //  @ts-ignore
                  phrases[current][lang as keyof Phrase]?.native
                )}
              </>
            </p>

            <div className="flex justify-between">
              <button
                onClick={() => setLevel(0)}
                className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-md text-base text-body-color font-medium hover:border-primary  hover:bg-secondary hover:text-white transition"
              >
                Retry
              </button>

              <button
                onClick={() => {
                  setLevel(level + 1);
                  if (level >= 2) {
                    setCurrent(current + 1);
                    setLevel(0);
                  }
                  if (current === phrases.length - 1) {
                    navigate("/success");
                  }
                }}
                className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-md text-base text-body-color font-medium hover:border-primary  hover:bg-secondary hover:text-white transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
