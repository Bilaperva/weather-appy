import React, {useState} from "react";


function Search ({indicateWeather}) {

    const api = {
        key : "23a3bc64f71a0e588156660f5031d234",
        base :"https://api.openweathermap.org/data/2.5/weather"
    };
    const [searchParameter, indicateSearchParameter ] = useState ("");

    const search = (e) => {
        if (e.key === "Enter"){
            fetch(`${api.base}?q=${searchParameter}&units=metric&lang=tr&appid=${api.key}`)
            .then((data) => data.json())
            .then((result) => {
                indicateSearchParameter("");
                indicateWeather(result)
                
            }) 
        }
    }

    

    return (
    <div className="search">
        <input 
        className="search-input" 
        type="text" 
        placeholder="Şehir"
        onChange={(e) => indicateSearchParameter (e.target.value)} 
        value={searchParameter}
        onKeyDown={search}
        />
    </div>
    )
}


export default Search