import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { buildChartData, options, totalChartData } from "./util";

function LineChartA({ className }) {
  const [line, setLine] = useState({});
  const [lineTitle, setLineTitle] = useState("Change in Cases");

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => response.json())
        .then((data) => {
          const chartData = buildChartData(data, "cases");
          setLine(chartData);
        });
    };
    fetchData();

    const graphOneInterval = setInterval(() => {
      setLineTitle("Total Cases Over Time");
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => response.json())
        .then((data) => {
          const totalChartDataM = totalChartData(data);
          // console.log(totalChartDataM);
          setLine(totalChartDataM);
        });
    }, 5000);
    const graphTwoInterval = setInterval(() => {
      setLineTitle("Change in Cases");
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => response.json())
        .then((data) => {
          const chartData = buildChartData(data, "cases");
          // console.log(data);
          setLine(chartData);
        });
    }, 8000);
    return () => {
      clearInterval(graphOneInterval);
      clearInterval(graphTwoInterval);
    };
  }, []);

  let data = {
    datasets: [
      {
        backgroundColor: "transparent",
        borderColor: "red",
        data: line,
      },
    ],
  };

  return (
    <div className={className}>
      {line?.length > 0 && (
        <>
          <h1>World Covid Cases: {lineTitle}</h1>
          <Line options={options} data={data} />
        </>
      )}
    </div>
  );
}

export default LineChartA;
