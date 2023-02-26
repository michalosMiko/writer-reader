import React from 'react';
import "./TextToSpeach.css";


function TextToSpeech({ text }) {
  const speak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <div className='Speach-box'>
      <button className='Speach-button' onClick={speak}>Speak</button>
    </div>
    
  );
}

export default TextToSpeech;
