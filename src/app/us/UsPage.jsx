"use client";
import xss from "xss";

import { useState, useEffect } from "react";
import { Navbar, SecondBack } from "../../components";
import axiosInstance from "../../api/axios";

import "./index.css";

// Temporary function to mimic API call
// function getData() {
//   const translatedData = {
//     terms: {
//       terms: "Terms",
//       close: "Close and Go Back",
//     },
//   };

//   const N = 3;

//   for (let i = 1; i <= N; ++i) {
//     translatedData.terms[`terms_text_${i}`] =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur.";
//   }

//   return translatedData;
// }

export default function UsPage() {
  // const translatedData = getData();

  const [translatedData, setTranslatedData] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axiosInstance("/language/us")
      .then((response) => {
        setTranslatedData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  const closePopup = () => {
    window.close();
  };

  const renderHtmlSafely = (html) => {
    return { __html: xss(html) };
  };

  return (
    <section>
      <Navbar />
      <SecondBack height={"100%"} />

      <div className="text-center mt-20" style={{ position: "relative" }}>
        <div className="mt-5">
          <button
            className="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]"
            onClick={closePopup}
          >
            {translatedData?.us?.close}
          </button>
        </div>
      </div>
      <div
        className="back-us px-16 py-10 text-center text-[14px] leading-7 font-[300] text-[#282b31]"
        style={{ position: "relative" }}
      >
        {!isError ? (
          <>
            <p
              dangerouslySetInnerHTML={renderHtmlSafely(
                translatedData?.us?.us_text_1
              )}
            />
            <p>{translatedData?.us?.us_text_2}</p>
            <p>{translatedData?.us?.us_text_3}</p>
          </>
        ) : (
          <p className="mt-6">Unable to load content.</p>
        )}
      </div>
    </section>
  );
}
