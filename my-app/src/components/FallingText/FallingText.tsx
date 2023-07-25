import React, { useState, useEffect } from "react";

const FallingText = ({ text }: { text: string }) => {
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    const characterArray = text.split(" ");
    const timeoutDelay = 300; // Adjust the delay as needed

    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex < characterArray.length) {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          characterArray[currentIndex],
        ]);
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, timeoutDelay);

    return () => {
      clearInterval(timer);
    };
  }, [text]);

  return (
    <div className="text-white falling-text">
      {characters.map((character, index) => (
        <React.Fragment>
          <span key={index} className="letter">
            {character}
          </span>{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FallingText;
