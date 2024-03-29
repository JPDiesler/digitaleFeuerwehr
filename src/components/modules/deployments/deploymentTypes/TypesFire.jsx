import React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./deploymentTypes.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TypesFire = (props) => {
  const [open, setOpen] = useState(false);
  const [contentSize, setContentSize] = useState({
    width: "80px",
    height: "80px",
  });
  const divRef = useRef(null);

  useEffect(() => {
    if (open) {
      const size = {
        width: `${divRef.current.scrollWidth}px`,
        height: `${divRef.current.scrollHeight}px`,
      };
      setContentSize(size);
    }
  }, [open]);

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div
      className={`d-flex rounded border border-2  fw-semibold text-nowrap ${
        props.isPortrait
          ? "flex-column " + (open ? "p-open" : "p-closed")
          : open
          ? "f-open"
          : "f-closed"
      }`}
      ref={divRef}
      style={
        props.isPortrait
          ? { height: open ? contentSize.height : "80px" }
          : { width: open ? contentSize.width : "80px" }
      }
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`d-flex align-items-center justify-content-start gap-2 p-2 border-2 ${
          props.isPortrait
            ? "flex-row border-bottom"
            : "flex-column border-end "
        }`}
      >
        <i className="fa-brands fa-gripfire red cfs-1"></i>
        <span className={`cfs-1 ${props.isPortrait ? "" : "vertical-text"}`}>
          Brand
        </span>
      </div>
      <div className="cfs-5">
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            B1
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Müllbrand</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Flächenbrand klein</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Fahrzeugbrand klein</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">04</div>
              <div className="ps-2 pe-2">Brandnachschau</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">05</div>
              <div className="ps-2 pe-2">Rauch im Freien</div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            B2
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Rauch aus Gebäude</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Flächenbrand groß</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Fahrzeugbrand groß</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">04</div>
              <div className="ps-2 pe-2">Kaminbrand</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">05</div>
              <div className="ps-2 pe-2">Brand Nebengebäude</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">06</div>
              <div className="ps-2 pe-2">Heimrauchmelder</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">07</div>
              <div className="ps-2 pe-2">Brandmeldeanlage</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">08</div>
              <div className="ps-2 pe-2">Wohungsbrand</div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            B3
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Gebäudebrand</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Hotel/Event</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Industriebrand</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">04</div>
              <div className="ps-2 pe-2">Explosion</div>
            </div>
          </div>
        </div>
        <div
          className={`d-flex ${
            props.isPortrait ? "" : "border-bottom"
          } border-2`}
        >
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            B4
          </div>
          <div className="flex-fill d-flex align-items-center">
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Sonderobjekte</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TypesFire.propTypes = {
  isPortrait: PropTypes.bool,
};
TypesFire.defaultProps = {
  isPortrait: false,
};

export default TypesFire;
