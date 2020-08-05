import React from "react";
import "./App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      {/* Header */}
      {/* Title and select input field */}
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option 2</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
          <MenuItem value="worldwide">Ayyyyyyy</MenuItem>
        </Select>
      </FormControl>
      {/* Main Body */}
      {/* 3 info boxes */}
      {/* Table */}
      {/* Map */}
    </div>
  );
}

export default App;
