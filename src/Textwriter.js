import React, { useState, useEffect } from "react";

import "./Textwriter.css"

function TextWriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

//   const fullText = "Header 1\nHeader 2\nParagraph 1\nParagraph 2";

// první dva jsou Nadpisy h1 a adalší dva odstavce jsou paragraf
  useEffect(() => {
    const fullText = `Header 1
    Nadpis
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit unde sit quibusdam ducimus? Ab pariatur in doloribus aliquam incidunt tempore?
    Paragraph 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nemo, quo dolores sequi neque pariatur reiciendis alias ratione corrupti doloribus est et vero eos quisquam, odio architecto maiores? Sequi corrupti aspernatur impedit pariatur fugit voluptates quae ipsum, earum fugiat. Est.`;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);
    // rychlost vypisování písmen
    return () => clearInterval(interval);
  }, [index]);

  const lines = text.split("\n");

  return (
    // možnosti textu a clasy
    <div className="text-box">
      <h1>{lines[0]}</h1>
      <p>{lines[2]}</p>

      <h1>{lines[1]}</h1>
      <p>{lines[3]}</p>
    </div>
    
  );
}

export default TextWriter;
