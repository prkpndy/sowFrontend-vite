"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink as Link } from "react-router-dom";
import { gsap } from "gsap";

import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import axiosInstance from "../../api/axios";

import "./navbar.css";
import logo from "../../assets/logo.png";

// function getLanguageData() {
//   const data = {
//     navigation: {
//       home: "Home",
//       order: "Order",
//       our_customer: "Our Customer",
//       about_us: "About Us",
//       contact_us: "Contact Us",
//     },
//   };

//   return data;
// }

// function getConfigData() {
//   const data = {
//     links: {
//       home: "/home",
//       order: "/order",
//       our_customer: "/our_customer",
//       about_us: "/about_us",
//       contact_us: "/contact_us",
//     },
//     logo: "https://storage.123fakturere.no/public/icons/diamond.png",
//   };

//   return data;
// }

export default function Navbar() {
  // const config = getConfigData();
  // const translatedData = getLanguageData();

  // TODO: Get the data from API calls
  const [navigationData, setNavigationData] = useState({});

  useEffect(() => {
    axiosInstance("/language/navigation")
      .then((response) => {
        setNavigationData(response.data?.navigation);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const closeDropdown = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, [setIsMobileMenuOpen]);

  const handleDocumentClick = useCallback(
    (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) // TODO - Understand the logic and correct it -- previous -> const translatedData = Language();
      ) {
        closeDropdown();
      }
    },
    [dropdownRef, closeDropdown]
  );

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isMobileMenuOpen, handleDocumentClick]);

  const animateMenu = (isOpen) => {
    const menuElement = menuRef.current;
    const timeline = gsap.timeline();

    if (isOpen) {
      timeline
        .to(menuElement, { height: "20rem", opacity: 1, duration: 0.01 })
        .then(() => {
          timeline.to(".sdasd", { height: "34%", duration: 0.03 });
        });
    } else {
      timeline.to(menuElement, { height: 0, duration: 0.003 });
      timeline.to(".sdasd", { height: 0, duration: 0.0000011, delay: 0.1 });
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1079 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    animateMenu(isMobileMenuOpen);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const linkCollection = [
    {
      label: navigationData?.home?.name,
      link: navigationData?.home?.link,
      alt: "Home",
      id: "1",
    },
    {
      label: navigationData?.order?.name,
      link: navigationData?.order?.link,
      alt: "Order",
      id: "2",
    },
    {
      label: navigationData?.our_customer?.name,
      link: navigationData?.our_customer?.link,
      alt: "Become a Customer",
      id: "3",
    },
    {
      label: navigationData?.about_us?.name,
      link: navigationData?.about_us?.link,
      alt: "About us",
      id: "4",
    },
    {
      label: navigationData?.contact_us?.name,
      alt: "Contact us",
      link: navigationData?.contact_us?.link,
      id: "5",
    },
  ];

  const collectionLink = linkCollection.map((collection) => (
    <Link
      to={collection.link || "/"}
      key={collection.id}
      className={`text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] ${
        isMobileMenuOpen ? "py-5 px-8" : "px-3 m-0"
      }`}
    >
      <span className="collectionSpan">
        <p>{collection.label}</p>
      </span>
    </Link>
  ));

  if (!navigationData) {
    return null; // Future function render a loading indicator
  }

  return (
    <nav
      style={{
        width: "100%",
        position: "relative",
        zIndex: "10",
        fontWeight: "600",
      }}
      className="navigation-out"
    >
      <header
        ref={dropdownRef}
        className={`w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] m-auto pt-10 ${
          isMobileMenuOpen ? "text-black" : "text-white"
        }`}
      >
        <section className="flex place-content-between">
          <div className="logoa">
            <Link to="/">
              <img src={logo} alt="" className="h-8 -mt-2" />
            </Link>
          </div>

          <div className="open-menu-dds">
            <BiMenu
              onClick={() => setIsMobileMenuOpen((prevValue) => !prevValue)}
              className="text-white text-4xl cursor-pointer"
            />
          </div>

          <div className="flex gap-4">
            <div
              className="menu bg-[#fff] absolute mt-12 shadow-lg"
              ref={menuRef}
            >
              <div
                className="sdasd"
                style={{ position: "relative", zIndex: "30" }}
              >
                {collectionLink}
              </div>
            </div>

            <div className="pc-menu">{collectionLink}</div>

            <div className="md:mt-0 lang-drop ">
              <LanguageDropdown />
            </div>
          </div>

          <div className="md:mt-0 lang-dropk mt-1">
            <LanguageDropdown />
          </div>
        </section>
      </header>
    </nav>
  );
}
