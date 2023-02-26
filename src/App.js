import TextToSpeech from "./components/TextToSpeach"
import TextWriter from "./Textwriter"
// import TextWriter from "./components/Twriter"

// čtečka textu
const App = () => {
  // ťext který se přečte ale nezobrazí
  const text = 'Vítáme vás na palubě lodi M-web-x ';

  return (
    <div>
      <TextWriter />
  
      
        
      <TextToSpeech text={text}/>
      
      
    </div>
  )
}

export default App