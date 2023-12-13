import React from "react";
import xss from "xss";
import { useEffect, useState } from "react";

import { SecondBack, Navbar } from "../../components";
import renderDynamicLinks from "../../lib/DynamicLinks";

import "./index.css";
import axiosInstance from "../../api/axios";

// Temporary function to mimic API call
// function getData() {
//   const translatedData = {
//     terms: {
//       terms: "Terms",
//       close: "Close and Go Back",
//     },
//   };

//   const N = 24;

//   for (let i = 1; i <= N; ++i) {
//     translatedData.terms[`terms_text_${i}`] =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur.";
//   }

//   return translatedData;
// }

export default function TermsPage() {
  // const translatedData = getData();

  const [translatedData, setTranslatedData] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axiosInstance("/language/terms")
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
      <SecondBack />
      <Navbar />

      <section style={{ position: "relative" }}>
        <div className="text-center mt-20">
          <h1 className="text-white font-[700] text-2xl">
            {translatedData?.terms?.terms}
          </h1>
          <div className="mt-5">
            <button
              className="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]"
              onClick={closePopup}
            >
              {translatedData?.terms?.close}
            </button>
          </div>
        </div>

        <div className="back-terms px-10 py-10 text-center text-[14px] leading-7 font-[300] text-[#282b31]">
          {!isError ? (
            <>
              <p
                dangerouslySetInnerHTML={renderHtmlSafely(
                  translatedData?.terms?.terms_text_1
                )}
              />

              {Array.from({ length: 2 }, (_, index) => {
                return (
                  <p key={index} className="">
                    {translatedData?.terms?.[`terms_text_${index + 2}`]}
                  </p>
                );
              })}

              <p className="mt-6">{translatedData?.terms?.terms_text_4}</p>
              <p className="mb-6">{translatedData?.terms?.terms_text_5}</p>

              {Array.from({ length: 14 }, (_, index) => {
                return (
                  <p key={index} className="">
                    {translatedData?.terms?.[`terms_text_${index + 6}`]}
                  </p>
                );
              })}
              <p>
                {renderDynamicLinks(translatedData?.terms?.terms_text_20, true)}
              </p>
              <p>{translatedData?.terms?.terms_text_21}</p>
              <p>{translatedData?.terms?.terms_text_22}</p>
              <p>{translatedData?.terms?.terms_text_23}</p>
              <p>{translatedData?.terms?.terms_text_24}</p>
            </>
          ) : (
            <p className="mt-6">Unable to load content.</p>
          )}
        </div>

        <div className="text-center my-5 py-6">
          <button
            className="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]"
            onClick={closePopup}
          >
            {translatedData?.terms?.close}
          </button>
        </div>
      </section>
    </section>
  );
}
