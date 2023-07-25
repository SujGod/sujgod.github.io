import React, { useState } from "react";
import { BoxProps } from "./Box.props";

export const Box: React.FC<BoxProps> = ({ message, color }) => {
  return (
    // create a
    <div className={`${color} p-4 rounded-lg flex justify-center items-center`}>
      <p className="rounded-lg text-lg font-medium text-center">{message}</p>
    </div>
  );
};
