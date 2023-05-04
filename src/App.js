import React, {useState} from "react";
import "./index.css";


import Background from "./components/Background";
import Search from "./components/Search/Search";
import Result from "./components/Result";
function App() {

    const [havaDurumu,indicateWeather] = useState({});
  
  return (
    <section className="application"> 
    <div id="title">Hava Durumu</div>
      <Background Bgimage={havaDurumu.weather && havaDurumu.weather[0].main} />
      <Search indicateWeather={indicateWeather} />
      <Result hava={havaDurumu} />
      
    </section>
  )
}

export default App;