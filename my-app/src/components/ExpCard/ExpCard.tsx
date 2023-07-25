import React, { useState, useEffect } from "react";
import { ExpCardProps } from "./ExpCard.props";
import { SideCard } from "../SideCard/SideCard";
import "./ExpCard.css";

export const ExpCard: React.FC<ExpCardProps> = ({
  experience,
  position,
  duration,
}) => {
  const [hoveredPart, setHoveredPart] = useState("");

  const handleHover = (part: string) => {
    setHoveredPart(part);
  };

  const renderContentBasedOnHover = (hoveredPart: string) => {
    switch (hoveredPart) {
      case "part1":
        return (
          <SideCard
            experience="J.P. Morgan Chase"
            position="Software Engineering Intern"
            duration="June 7th - August 13th"
          ></SideCard>
        );
      case "part2":
        return <div>Content for Part 2</div>;
      case "part3":
        return <div>Content for Part 3</div>;
      case "part4":
        return <div>Content for Part 4</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row">
      <div className="main-card ml-24">
        <div
          className="card-one"
          onMouseEnter={() => handleHover("part1")}
          onMouseLeave={() => handleHover("")}
        >
          <h3 className="card-title text-center text-white">{experience}</h3>
          <h4 className="card-subtitle text-center text-white">{position}</h4>
          <h4 className="card-subtitle text-center text-white">{duration}</h4>
        </div>
        <div
          className="card-two"
          onMouseEnter={() => handleHover("part2")}
          onMouseLeave={() => handleHover("")}
        >
          <h3 className="card-title text-center text-white">{experience}</h3>
          <h4 className="card-subtitle text-center text-white">{position}</h4>
          <h4 className="card-subtitle text-center text-white">{duration}</h4>
        </div>
        <div
          className="card-three"
          onMouseEnter={() => handleHover("part3")}
          onMouseLeave={() => handleHover("")}
        >
          <h3 className="card-title text-center text-white">{experience}</h3>
          <h4 className="card-subtitle text-center text-white">{position}</h4>
          <h4 className="card-subtitle text-center text-white">{duration}</h4>
        </div>
        <div
          className="card-four"
          onMouseEnter={() => handleHover("part4")}
          onMouseLeave={() => handleHover("")}
        >
          <h3 className="card-title text-center text-white">{experience}</h3>
          <h4 className="card-subtitle text-center text-white">{position}</h4>
          <h4 className="card-subtitle text-center text-white">{duration}</h4>
        </div>
      </div>
      {renderContentBasedOnHover(hoveredPart)}
    </div>
  );
};
