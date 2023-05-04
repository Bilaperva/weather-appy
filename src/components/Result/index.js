function index({ hava }) {
  

    return (
        <>
        {typeof hava.main != "undefined" && (

            <div className="result">
            <div className="city">{hava.name}, {hava.sys.country}</div>
            <div className="detail">
                <div className="degree">{Math.round(hava.main.temp)}°c</div>
                <div className="status">{hava.weather[0].description}</div>

            </div>


        </div>

        )}
            
        </>
    )
}

export default index