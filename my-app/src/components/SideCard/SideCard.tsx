import React, { useState, useEffect } from "react";
import { SideCardProps } from "./SideCard.props";
import "./SideCard.css";

export const SideCard: React.FC<SideCardProps> = ({ experience, position }) => {
  return (
    <div className="flex">
      <div className="card ml-12">
        <h4 className="card-desc text-white text-center mt-24 mb-12">
          Worked in a team of 4 to facilitate user interaction in the data
          pipeline process at the firm
        </h4>
        <img
          className="fade-img ml-auto mr-auto"
          src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="250"
          height="250"
        ></img>
      </div>
      <div className="card ml-12">
        <h4 className="card-desc text-center text-white">Learned Skills</h4>
      </div>
      <div className="card ml-12">
        <h4 className="card-desc text-center text-white">Achievements</h4>
      </div>
    </div>
  );
};
