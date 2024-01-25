import React, { useState, useEffect, useRef } from "react";
import "./Vehicles.scss";
import Vehicle from "./Vehicle";

const tlfw_details = (
  <>
    3000L Wassertank <br /> Dachwasserwerfer <br /> Frontsprühbalken <br />{" "}
    Truppkabine <br /> Allradantrieb
  </>
);

const tlfw = (
  <Vehicle
    imgSrc="./TLF_3000.png"
    title="TLF-3000"
    callsign="Florian Diez 15/23-2"
    crew="1/2"
    details={tlfw_details}
    date="07.10.2023"
    carrier="Rhein-Lahn-Kreis"
  />
);

const dlk_details = (
  <>
    500KG Korb <br />
    27m Leiterpark <br />
    Truppkabine
  </>
);

const dlk = (
  <Vehicle
    imgSrc="./DLK.png"
    title="DLK-18/12"
    callsign="Florian Diez 15/33"
    crew="1/2"
    details={dlk_details}
    date="11.06.2022"
    carrier="VG Diez"
  />
);

const hlf_details = (
  <>
    2500L Wassertank <br />
    TH-Ausrüstung <br />
    Gruppenkabine <br /> Allradantrieb
  </>
);

const hlf = (
  <Vehicle
    imgSrc="./TLF_1625.png"
    title="TLF-16/25"
    callsign="Florian Diez 15/23-1"
    crew="1/8"
    details={hlf_details}
    date="20.12.2005"
    carrier="VG Diez"
  />
);

const mtf_details = (
  <>
    GAMS+ Satz <br /> Taktikboard <br /> Wasserrettungssatz <br /> Pavillion
  </>
);
const mtf = (
  <Vehicle
    title="MTF"
    callsign="Florian Diez 15/19"
    crew="1/8"
    details={mtf_details}
    date="28.04.2011"
    carrier="VG Diez"
  />
);

const vehicles = [tlfw, dlk, hlf, mtf];

const Vehicles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(activeIndex);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => console.log(offset, activeIndex), [offset, activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      let width = vwToPx(50);
      if (width < 700) {
        width = 700;
      }
      const newOffset =
        activeIndexRef.current *
        (window.innerWidth + width); /* your calculation */
      setOffset(-newOffset);
    };

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const vwToPx = (vw) => (vw / 100) * window.innerWidth;

  const nextVehicle = () => {
    const newIndex = (activeIndex + 1) % vehicles.length;
    if (newIndex != 0) {
      const offset_1 = window.innerWidth + vwToPx(50);
      setOffset(offset - offset_1);
    } else {
      setOffset(0);
    }
    setActiveIndex(newIndex);
  };

  const prevVehicle = () => {
    const offset_1 = window.innerWidth + vwToPx(50);
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = vehicles.length - 1;
      setOffset(-newIndex * offset_1);
    } else {
      setOffset(offset + offset_1);
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="flex-fill d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <h1 className="title">Unsere Einsatzfahrzeuge</h1>
      <div>
        <div className="d-flex align-items-center position-relative">
          <button onClick={prevVehicle} className="btn p-0 pt-5 pb-5 me-3 z-1">
            <i className="bi bi-chevron-compact-left fs-1"></i>
          </button>
          <div className="placeholder z-1">{vehicles[0]}</div>
          <div
            id="carousel-container"
            className="carousel-container"
            style={{
              transform: `translateX(${offset}px)`,
              transition: "transform 0.75s ease-in-out",
            }}
          >
            <button
              onClick={prevVehicle}
              className="btn p-0 pt-5 pb-5 me-3 placeholder"
              disabled={true}
            >
              <i className="bi bi-chevron-compact-left fs-1"></i>
            </button>
            {vehicles.map((vehicle) => {
              return vehicle;
            })}
          </div>
          {/* {vehicles[activeIndex]} */}
          <button onClick={nextVehicle} className="btn p-0 pt-5 pb-5 ms-3 z-1">
            <i className="bi bi-chevron-compact-right fs-1"></i>
          </button>
        </div>
        <div className="flex-fill d-flex justify-content-center align-items-centerp-2 pt-3 pb-4">
          {vehicles.map((vehicle, index) => (
            <button
              key={index}
              className={`indicator ${
                index === activeIndex ? "indicator_active " : ""
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
