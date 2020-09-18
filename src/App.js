import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Card,
  CardContent,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutGraph";
import LineChartA from "./LineChartA";
import InfoContent from "./InfoContent";
import Footer from "./Footer";

function App() {
  // contain needed data
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [graphColor, setGraphColor] = useState("rgba(204, 16,  52, 0.5)");
  const [graphBorderColor, setGraphBorderColor] = useState("#CC1034");
  // worldwide data needed when page first loads
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  // gets the countries for the dropdown
  // can use multiple useEffects
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        })
        .catch((error) => console.log(error));
    };
    getCountriesData();
  }, []);

  // console.log(tableData);
  // displays the name of country selected

  const onCountryChange = async (event = "worldwide") => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    // https://disease.sh/v3/covid-19/all (world wide data)
    // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE] (individual country data)
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (countryCode === "worldwide") {
          setMapCenter({ lat: 34.80746, lng: -40.4796 });
        } else {
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        }
        console.log(data);
        setCountry(countryCode);
        setCountryInfo(data);

        setMapZoom(4);
      });
  };
  // console.log("y", countryInfo);
  // console.log("ssss", mapCountries);
  return (
    <main className="app__container">
      <section className="app__firstSection">
        <div className="app__firstSectionLeft">
          {/* Header */}
          {/* Title and select input field */}
          <div className="app__firstSectionHeader">
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="app__firstSectionDropDown">
              <Select
                variant="outlined"
                onChange={onCountryChange}
                value={country}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country, i) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* Main Body */}
          {/* 3 info boxes */}
          <div className="app__firstSectionStats">
            {/* Info Boxes go here */}
            {/* <InfoBox title = "Coronavirus Cases" />*/}
            {/* <InfoBox title = "Coronavirus Recoveries" />*/}
            {/* <InfoBox title = "Coronavirus Deaths" />*/}
            <InfoBox
              cardTextColor="red"
              isColor={"isRed"}
              active={casesType === "cases"}
              onClick={(e) => {
                setCasesType("cases");
                setGraphColor("rgba(204, 16,  52, 0.5)");
                setGraphBorderColor("#CC1034");
              }}
              title="Coronavirus Cases"
              cases={prettyPrintStat(countryInfo.todayCases)}
              total={prettyPrintStat(countryInfo.cases)}
            />
            <InfoBox
              cardTextColor="green"
              isColor="isGreen"
              active={casesType === "recovered"}
              onClick={(e) => {
                setCasesType("recovered");
                setGraphColor("#7dd71d");
                setGraphBorderColor("green");
              }}
              title="Recovered"
              cases={prettyPrintStat(countryInfo.todayRecovered)}
              total={prettyPrintStat(countryInfo.recovered)}
            />
            <InfoBox
              cardTextColor="blue"
              isColor="isBlue"
              active={casesType === "deaths"}
              onClick={(e) => {
                setCasesType("deaths");
                setGraphColor("#87CEFA");
                setGraphBorderColor("#318fb5");
              }}
              title="Deaths"
              cases={prettyPrintStat(countryInfo.todayDeaths)}
              total={prettyPrintStat(countryInfo.deaths)}
            />
          </div>
          {/* Map */}
          <Map
            casesType={casesType}
            countries={mapCountries}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
        <Card className="app__firstSectionRight">
          <CardContent>
            <h3>Live Cases By Country</h3>
            {/* Table */}
            <Table countries={tableData} />
            <h3 className="app__firstSectionGraphTitle">
              Worldwide new {casesType}
            </h3>
            {/* Graph */}
            <LineGraph
              className="app__firstSectionGraph"
              bgColor={graphColor}
              borderCl={graphBorderColor}
              casesType={casesType}
            />
          </CardContent>
        </Card>
      </section>
      <Card className="app__secondSection">
        <PieChart className="app__secondSectionGraph" />
        <DoughnutChart className="app__secondSectionGraph" />
        <LineChartA className="app__secondSectionGraphLine " />
      </Card>
      <Card className="app__thirdSection">
        <InfoContent />
      </Card>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

export default App;
