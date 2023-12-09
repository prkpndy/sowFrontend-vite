import React from "react";
import { NavLink as Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import LanguageDropdown from "../../LanguageDropdown/LanguageDropdown";
// import MobileMenu from "./MobileMenu";

// import "./styles/dashNavbar.css";
import "../../Navbar/navbar.css";
import userPic from "../../../assets/user.png";

export default function DashNavbar({ translatedData }) {
  return (
    <nav className="block bg-[#0f7ee8]">
      <header className="dashnav-bar-header m-auto py-4">
        <section className="flex place-content-between">
          <div className="user-details gap-2">
            <Link href={"/dashboard"}>
              <img
                src={userPic}
                alt={translatedData?.price_list?.user_name}
                className="h-14 rounded-[50%] "
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  border: "1.5px solid #fff",
                }}
              />
            </Link>
            <div className="my-3">
              <p className="text-white text-[17px]">
                {translatedData?.price_list?.user_name}
              </p>
              <div className="-mt-1">
                <p className="text-white text-[12px]">
                  {translatedData?.price_list?.user_address}
                </p>
              </div>
            </div>
          </div>
          <div className="my-5">
            <BiMenu className="lang-dropk text-white text-4xl cursor-pointer" />
          </div>
          {/* <MobileMenu /> */}
          <div className="mt-6 mb-4 text-white">
            <LanguageDropdown />
          </div>
        </section>
      </header>
    </nav>
  );
}
