import React, { useState } from "react";
import { BoxProps } from "./Box.props";

export const Box: React.FC<BoxProps> = ({ message, color }) => {
  return (
    <div>
      <p className={`rounded-lg text-lg font-medium bg-red-900 ${color}`}>
        {message}
      </p>
    </div>
  );
};
