import React, { useState, useEffect } from "react";

function TextWriter() {
  const [text, setText] = useState([
    "Header 1",
    "Header 2",
    "Paragraph 1",
    "Paragraph 2",
  ]);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let currentWordIndex = 0;
    let timer;

    const startTimer = () => {
      timer = setInterval(() => {
        const currentWord = text[currentIndex];
        const currentLetter = currentWord.charAt(currentWordIndex);
        setCurrentText((prevText) => prevText + currentLetter);

        if (currentWordIndex === currentWord.length - 1) {
          // word is complete, move to next word
          currentIndex = (currentIndex + 1) % text.length;
          currentWordIndex = 0;
        } else {
          // move to next letter in current word
          currentWordIndex++;
        }

        if (currentIndex === 0 && currentWordIndex === 0) {
          // we've looped back to the beginning, clear the interval
          clearInterval(timer);
        }
      }, 100);
    };

    startTimer();

    return () => {
      clearInterval(timer);
    };
  }, [text]);

  return (
    <div>
      <h1>{currentText}</h1>
    </div>
  );
}

export default TextWriter;
