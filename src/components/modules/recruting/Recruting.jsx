import React from "react";
import Map from "../../map/Map";
import "./Recruting.scss";

const Recruting = () => {
  return (
    <div
      id="recruting"
      className={
        "element d-flex flex-wrap align-items-center justify-content-center border border-danger"
      }
    >
      <div className="d-flex">
        <div className="d-flex flex-column align-items-center jusitify-content-center min-width me-5">
          <img src="/_DSC6828_small.png" alt="" height={512} />
          <div>
            <h1>
              Dich interessiert das <br />
              Feuerwehrhandwerk?
            </h1>
            <h3 className="text-primary">
              Dann komm uns besuchen! <br />
              Jeden 1. und 3. Mittwoch im Monat
            </h3>
            <button className="btn btn-primary d-flex align-items-center fw-semibold gap-2 mt-5">
              <i className="bi bi-download fs-5"></i>
              <span>Anmeldeformulare</span>
            </button>
          </div>
        </div>
        <div className="vr" />
        <div className="ms-5">
          <span className="fs-3 fw-semibold">Hier findest du uns!</span>
          <div className="rounded-3 map_container z-3">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruting;
