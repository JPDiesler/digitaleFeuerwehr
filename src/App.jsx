import React from "react";
import "./App.scss";
import { useEffect, useState } from "react";
import DwdWidget from "./components/dwd/DwdWidget";
import Navbar from "./components/navbar/Navbar";
import ModeButton from "./components/modeButton/ModeButton";
import Deployments from "./components/modules/deployments/Deployments";
import Aktuelles from "./components/modules/aktuelles/Aktuelles";
import Vehicles from "./components/modules/vehicles/Vehicles";
import NavbarMobile from "./components/navbar/NavbarMobile";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
import "./components/navbar/Navbar.scss";
import { useCookies } from "react-cookie";
import Recruting from "./components/modules/recruting/Recruting";
import Footer from "./components/modules/footer/Footer";

function App() {
  const [colorMode, setColorMode] = useState("auto");
  const [cookies, setCookie] = useCookies(["theme"]);

  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    // Load the mode from the cookie when the component mounts
    const savedMode = cookies.theme;
    if (savedMode) {
      setColorMode(savedMode);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    // Create a new mutation observer
    const observer = new MutationObserver((mutations) => {
      // For each mutation
      mutations.forEach((mutation) => {
        // If the mutation is an attribute mutation and the attribute is 'data-bs-theme'
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-bs-theme"
        ) {
          const colorMode = html.getAttribute("data-bs-theme");
          if (colorMode == "auto") {
            const prefersDarkScheme = window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches;
            if (prefersDarkScheme) {
              html.setAttribute("data-bs-theme", "dark");
              setColorMode("dark");
            } else {
              html.setAttribute("data-bs-theme", "light");
              setColorMode("light");
            }
          } else {
            setColorMode(colorMode);
          }
        }
      });
    });

    // Start observing the 'html' element for attribute mutations
    observer.observe(html, { attributes: true });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className={colorMode == "dark" ? "bg-secondary-subtle" : "bg-body"}>
        {isPortrait ? (
          <div className="canvas d-flex flex-column justify-content-end position-relative">
            <div className="z-1 flex-fill d-flex justify-content-center mt-3">
              <DwdWidget location={"Holzappel"} alwaysVisible={false} />
            </div>
            <div className="position-absolute path z-0">
              <img
                src="/Unbenannt.png"
                width={"30%"}
                className="logo translate-middle"
              />
            </div>
            <div
              className={`d-flex flex-column align-items-center rounded-top-5 rounded-spacer z-0 position-relative`}
            >
              <div
                className="d-flex flex-column align-items-center justify-content-center pointer"
                onClick={() => scrollToElement("landing")}
              >
                <h5 className="fw-semibold m-0 mt-2">Scrollen</h5>
                <i className="fs-5 bi bi-chevron-compact-down m-0"></i>
              </div>
            </div>
            <NavbarMobile />
          </div>
        ) : (
          <div id="header" className="">
            <ScrollToTopButton />
            <div className="canvas d-flex flex-column justify-content-end position-relative">
              <div className="position-absolute path z-0">
                <img
                  src="/Unbenannt.png"
                  width={"30%"}
                  className="logo translate-middle"
                />
              </div>
              <div className="flex-fill d-flex flex-column mt-3 ps-3 pe-3">
                <div
                  id="topbar"
                  className="row d-flex justify-content-between align-items-center gap-3  z-1"
                >
                  <div className="col flex-grow-1 d-flex justify-content-start z-1">
                    <ModeButton />
                  </div>
                  <div className="col flex-grow-1 z-1 d-flex justify-content-center ">
                    <Navbar />
                  </div>
                  <div className="col flex-grow-1 d-flex justify-content-end z-1 ">
                    <DwdWidget location={"Holzappel"} alwaysVisible={true} />
                  </div>
                </div>
              </div>
              <div
                className={
                  (colorMode == "dark" ? "bg-secondary-subtle" : "bg-body") +
                  " d-flex align-items-center justify-content-center rounded-top-5 rounded-spacer z-0 position-relative"
                }
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center pointer move-down"
                  onClick={() => scrollToElement("recruting")}
                >
                  <h5 className="fw-semibold m-0 mt-2">Scrollen</h5>
                  <i className="fs-5 bi bi-chevron-compact-down m-0"></i>
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="content">
          <div
            id="recruting"
            className={"element " + (isPortrait ? "m-0 mt-5 mb-5" : "m-5")}
          >
            <Recruting />
          </div>
          <div
            id="aktuelles"
            className={"blog_element " + (isPortrait ? "m-0 mt-5 mb-5" : "m-5")}
          >
            <Aktuelles />
          </div>
          {/* <div
            id="date"
            className={
              "element d-flex justify-content-center align-items-center " +
              (isPortrait ? "m-0 mt-5 mb-5" : "m-5")
            }
          >
            <EventCalendar />
          </div> */}
          <div
            id="deployments"
            className={
              "d-flex justify-content-center align-items-center element position-relative " +
              (isPortrait ? "m-0 mt-5 mb-5" : "m-5")
            }
          >
            <Deployments />
          </div>
          <div
            id="vehicles"
            className={
              "element d-flex justify-content-center " +
              (isPortrait ? "m-0 mt-5 mb-5" : "m-5")
            }
          >
            <Vehicles />
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
