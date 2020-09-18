import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
/* 
const pieChartData = (data) => {
  let pieCases = 0;
  let pieRecovered = 0;
  let pieDeaths = 0;
  for (let cases in data.case) {
    pieCases = pieCases + data.case[cases];
  }
  for (let recovered in data.recovered) {
    pieRecovered = pieRecovered + data.recovered[recovered];
  }
  for (let deaths in data.deaths) {
    pieDeaths = pieDeaths + data.deaths[deaths];
  }

  return [pieCases, pieRecovered, pieDeaths];
}; */

function PieChart({ className }) {
  const [all, setAll] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setAll(data);
        });
    };
    fetchData();
  }, []);

  const data = {
    labels: ["Total Cases", "Recovered", "Deaths"],
    datasets: [
      {
        backgroundColor: ["#FF0000", "#ADFF2F", "#87CEFA"],
        data: [all.cases, all.recovered, all.deaths],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };
  // console.log(cases);
  return (
    <div className={className}>
      <h2>Covid World Data</h2>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
