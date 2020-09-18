import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutGraph({ className }) {
  const [doughData, setdoughData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setdoughData(data);
        });
    };
    fetchData();
  }, []);

  const data = {
    labels: ["Today Cases", "Today Recovered", "Today Deaths"],
    datasets: [
      {
        backgroundColor: ["#FF0000", "#ADFF2F", "#87CEFA"],
        data: [
          doughData.todayCases,
          doughData.todayRecovered,
          doughData.todayDeaths,
        ],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className={className}>
      <h2>Covid World Today Data</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutGraph;
