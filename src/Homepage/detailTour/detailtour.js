import Main from '../../Component/Main/main';

function DetailTour() {
    return (
        Data.map((datas) => {
            let path = `assets/${datas.image}`;
            return (
                <div className="container rounded mt-3">
                    <img src={path} alt="destination"></img>
                    <h3>
                        {datas.day}D/{datas.nigth}N {datas.destination}
                    </h3>
                    <div className="priceContainer d-flex justify-content-between">
                        <Link to='/detailtour'><p>IDR. {datas.price}</p></Link>
                        <small>{datas.country}</small>
                    </div>
                </div>
            )
        }

export default DetailTour;