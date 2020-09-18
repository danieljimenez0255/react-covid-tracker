import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

// ...props means any other props that come through
// -- in class names means something is being modified
function InfoBox({ title, cases, active, total, ...props }) {
  return (
    <Card
      className={`infoBox ${
        active && "infoBox--selected"
      } ${`infoBox--${props.isColor}`}`}
      onClick={props.onClick}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* Stats(change) */}
        <h2
          className={`infoBox__cases ${`infoBox__cases--${props.cardTextColor}`}`}
        >
          {cases}
        </h2>
        {/* Stats(Total) */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
