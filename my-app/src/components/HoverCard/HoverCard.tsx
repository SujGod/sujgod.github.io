import React, { useState, useEffect } from "react";
import { HoverCardProps } from "./HoverCard.props";
import "./HoverCard.css";

export const HoverCard: React.FC<HoverCardProps> = ({
  school,
  yearDuration,
  degree,
  schoolType,
}) => {
  if (schoolType === "ohio-state") {
    return (
      <div className="card-ohio-state mr-6 ml-6">
        <div className="card-content">
          <h3 className="card-title text-center text-white">{school}</h3>
          <h4 className="card-subtitle text-center">{degree}</h4>
          <h4 className="card-subtitle text-center">{yearDuration}</h4>
          <img
            className="fade-img mt-20 ml-auto mr-auto"
            src="./ohioStateLogo.png"
            width="250"
            height="250"
          ></img>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-highland mr-6 ml-6">
        <div className="card-content">
          <h3 className="card-title text-center text-white">{school}</h3>
          <h4 className="card-subtitle text-center">{degree}</h4>
          <h4 className="card-subtitle text-center">{yearDuration}</h4>
          <img
            className="fade-img mt-20 ml-auto mr-auto"
            src="./highland.png"
            width="200"
            height="200"
          ></img>
        </div>
      </div>
    );
  }
};
