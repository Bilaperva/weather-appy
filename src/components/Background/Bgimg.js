import rain from "../../image/yagmurlu.jpg";
import cloud from "../../image/bulutlu.jpg";
import snow from "../../image/karli.jpg";
import sun from "../../image/gunesli.jpg";
import tunder from "../../image/simsek.jpg";
import fog from "../../image/sisli.jpg";
import clas from "../../image/Clas.jpg";


function Bgimg({ status }) {
    switch (status) {
        case "Rain":
            return <img className="background-img" src={rain} alt="yagmurlu" style={{width:"100%" , height:"100%"}} />
        case "Clouds":
            return <img className="background-img" src={cloud} alt="bulutlu"style={{width:"100%" , height:"100%"}} />
        case "Snow":
            return <img className="background-img" src={snow} alt="karli" style={{width:"100%" , height:"100%"}}/>
        case "Clear":
            return <img className="background-img" src={sun} alt="gunesli" style={{width:"100%" , height:"100%"}} />
        case "Storm":
            return <img className="background-img" src={tunder} alt="simsek" style={{width:"100%" , height:"100%"}}/>
        case "Mist":
            return <img className="background-img" src={fog} alt="sisli"style={{width:"100%" , height:"100%"}} />
        default :
        return <img  className="background-img" src={clas} alt="standart" style={{width:"100%" , height:"100%"}}/>

        
    }
}

export default Bgimg;