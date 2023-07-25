/* eslint-disable @next/next/no-sync-scripts */
import React, { useState } from "react";
import { TypingEffectProps } from "./TypingEffect.props";
import Typed from "typed.js";

export const TypingEffect: React.FC<TypingEffectProps> = ({ name }) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  var names: string[] = [];
  names.push(name);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: names,
      typeSpeed: 200,
      backSpeed: 200,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  });

  return (
    <div className="rounded-lg">
      <span
        className="rounded-lg text-4xl text-white font-medium text-center"
        ref={el}
      />
    </div>
  );
};
