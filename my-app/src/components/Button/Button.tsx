import React, { useState } from "react";
import { ButtonProps } from "./Button.props";

export const Box: React.FC<ButtonProps> = ({ message, name }) => {
  // useState allows already built in updating
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}
      <button
        className="text-lg font-medium bg-emerald-400 animate-pulse"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );

  
};
