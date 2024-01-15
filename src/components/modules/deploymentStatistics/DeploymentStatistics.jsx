import React from "react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./deploymentStatistics.scss";

const deployments = [
  {
    type: "TH",
    date: "31.01.2023",
    time: "16:31 Uhr",
    description: "H2.03, Eingeklemmente Person Hirschberg",
  },
  {
    type: "TH",
    date: "24.02.2023",
    time: "12:22 Uhr",
    description: "H1.08, Unterstüzung Personenrettung Langenscheid",
  },
  {
    type: "TH",
    date: "10.03.2023",
    time: "19:07 Uhr",
    description: "H2.07, Baum auf Fahrzeug L317 zwischen Hirschberg & Eppenrod",
  },
  {
    type: "U",
    date: "10.03.2023",
    time: "19:24 Uhr",
    description: "U2.07, umgestürzter Baum Laurenburger Schleuse",
  },
  {
    type: "B",
    date: "23.03.2023",
    time: "16:21 Uhr",
    description: "B3.01, Gebäudebrand Cramberg",
  },
  {
    type: "TH",
    date: "24.03.2023",
    time: "16:41 Uhr",
    description: "H2.04, Person in Zwangslage zwischen Holzappel & Geilnau",
  },
  {
    type: "B",
    date: "28.04.2023",
    time: "20:02 Uhr",
    description: "W3.01 Schiffsbrand Laurenburg",
  },
  {
    type: "B",
    date: "09.05.2023",
    time: "08:45 Uhr",
    description: "B2.04, Kaminbrand Holzappel",
  },
  {
    type: "B",
    date: "25.05.2023",
    time: "19:26 Uhr",
    description: "B2.01,Rauchentwicklung aus Gebäude Eppenrod",
  },
  {
    type: "B",
    date: "08.06.2023",
    time: "22:17 Uhr",
    description: "B2.02, Waldbrand Dörnberg",
  },
  {
    type: "B",
    date: "03.07.2023",
    time: "18:50 Uhr",
    description: "B2.02, Unterstützung TLF-3000 Flächenbrand Dachsenhausen",
  },
  {
    type: "B",
    date: "04.07.2023",
    time: "14:25 Uhr",
    description: "B2.02, Unterstützung TLF-3000 Flächenbrand Lierschied",
  },
  {
    type: "TH",
    date: "10.07.2023",
    time: "01:57 Uhr",
    description: "H2.01, Türöffnung für den Rettungsdienst in Horhausen",
  },
  {
    type: "TH",
    date: "10.07.2023",
    time: "11:08 Uhr",
    description: "H2.02, Personenrttung aus unwegsamen Gelände B417",
  },
  {
    type: "B",
    date: "11.07.2023",
    time: "18:17 Uhr",
    description: "B2.02, Flächenbrand Holzheim",
  },
  {
    type: "B",
    date: "11.07.2023",
    time: "19:43 Uhr",
    description: "B2.01, Rauchentwicklung aus Gebäude Dörnberg",
  },
  {
    type: "B",
    date: "12.07.2023",
    time: "15:50 Uhr",
    description: "B2.02, Unterstützung TLF-3000 Flächenbrand Altendiez",
  },
  {
    type: "B",
    date: "19.07.2023",
    time: "11:56 Uhr",
    description: "B1.02, Unterstützung TLF-3000 Flächenbrand Stahlhofen",
  },
  {
    type: "B",
    date: "27.07.2023",
    time: "11:39 Uhr",
    description: "B2.03, Fahrzeugbrand nach Verkehrsunfall Eppenrod",
  },
  {
    type: "B",
    date: "03.09.2023",
    time: "16:34 Uhr",
    description: "B3.01, Dachstuhlbrand in Diez",
  },
  {
    type: "B",
    date: "12.09.2023",
    time: "22:06 Uhr",
    description: "B2.01, Rauchentwicklung aus Gebäude Horhausen",
  },
  {
    type: "U",
    date: "12.09.2023",
    time: "23:24 Uhr",
    description: "U2.02 Unterstützung mit Aggregart in Diez nach Unwetter",
  },
  {
    type: "B",
    date: "17.09.2023",
    time: "19:08 Uhr",
    description: "B3.01 Gebäudebrand Scheidt",
  },
  {
    type: "G",
    date: "22.10.2023",
    time: "11:39 Uhr",
    description: "G1.01 Ölspur B417",
  },
  {
    type: "TH",
    date: "26.10.2023",
    time: "23:16 Uhr",
    description: "H2.01 Türöffnung für den Rettungsdienst Holzappel",
  },
  {
    type: "B",
    date: "11.11.2023",
    time: "11.05 Uhr",
    description: "B2.04, Kaminbrand Hirschberg",
  },
  {
    type: "B",
    date: "14.11.2023",
    time: "10:35 Uhr",
    description: "B2.04, Kaminbrand Laurenburg",
  },
  {
    type: "U",
    date: "27.11.2023",
    time: "19:01 Uhr",
    description: "U2.04, Unwetter, Ast auf Stromleitung Dörnberg-Hütte",
  },
  {
    type: "U",
    date: "27.11.2023",
    time: "20:23 Uhr",
    description: "U2.04, Unwetter, Baum auf Stromleitung Holzappel",
  },
  {
    type: "TH",
    date: "27.11.2023",
    time: "21:36 Uhr",
    description: "H1.07, Unwetter, Umgestürzter Baum Bruchhäuser Mühle",
  },
  {
    type: "U",
    date: "27.11.2023",
    time: "22:17 Uhr",
    description: "U2.07, Unwetter, Baum auf Fahrbahn B417 Holzappel-Laurenburg",
  },
  {
    type: "TH",
    date: "27.11.2023",
    time: "22:35 Uhr",
    description:
      "H1.07, PKW zwichen Bäumen eingeschlossen, B417 Holzappel-Laurenburg",
  },
  {
    type: "TH",
    date: "28.11.2023",
    time: "11:08 Uhr",
    description: "H1.07, Ast auf Stromleitung Dörnberg-Hütte",
  },
];

const DeploymentStatistics = (props) => {
  const chartRef = useRef(null);

  function countData(types, data) {
    const entryCount = [];
    types.forEach((type) => {
      let count = 0;
      data.forEach((deployment) => {
        if (deployment.type == type) {
          count += 1;
        }
      });
      entryCount.push(count);
    });
    return entryCount;
  }

  const data = countData(["B", "TH", "G", "U", "F"], deployments);
  console.log(data);

  useEffect(() => {
    const ctx = document.getElementById("deploymentChart");

    const indexOfLargest = data.indexOf(Math.max(...data));
    const offsets = Array(data.length).fill(0);
    offsets[indexOfLargest] = 20;

    // Check if there is an existing Chart instance and destroy it
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new Chart instance
    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Brand",
          "Tech. Hilfe",
          "Gefahrstoff",
          "Unterstüzung",
          "Fehlarlam",
        ],
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "#30D9A3",
              "#C2C2C2",
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "#e9ecef",
              font: {
                weight: "550",
                size: "15",
              },
            },
            align: "center",
            position: "bottom",
          },
        },
      },
    });

    // Cleanup: Destroy the Chart instance when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <>
      <div className="d-inline-flex flex-column mt-3 mb-3 test-q">
        <h1>Einsatzstatistik</h1>
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <canvas id="deploymentChart" className="canvas-chart"></canvas>
          </div>
          <div className="overflow-y-scroll list rounded border p-2">
            <ul className="list-group">
              {deployments.map((deployment, index) => (
                <li
                  key={index}
                  className="list-group-item list-group-item-action pt-0 pb-0"
                >
                  <div className="d-flex gap-3 align-items-center">
                    <h5 className="m-0 number">{index + 1 + "."}</h5>
                    <div className="vr" />
                    <div className="d-flex flex-column datetime">
                      <span>{deployment.date}</span>
                      <span>{deployment.time}</span>
                    </div>
                    <div className="vr" />
                    <span>{deployment.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link">Vorheriges Jahr</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2023
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Nächstes Jahr
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

DeploymentStatistics.propTypes = {};

export default DeploymentStatistics;