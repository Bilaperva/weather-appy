import Bgimg from "./Bgimg";

function index ({Bgimage}) {
    return (
        <div className="background">
            <div className="overlay"></div>
            <Bgimg status={Bgimage} />
        </div>
    )
}

export default index