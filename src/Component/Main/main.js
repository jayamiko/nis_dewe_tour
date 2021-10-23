import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Data from "../../Data/Data.json";
import Footer from "../Footer/footer";
import { BrowserRouter, Route, Link } from "react-router-dom";
import DetailTour from "../../Homepage/detailTour/detailtour";

function Main() {
    return (
        <BrowserRouter>
            <div>
                <Container fluid className="mainContainer ">
                    <img
                        className="hibiscusImg"
                        src="assets/hibiscus 1.png"
                        alt="hibiscus">
                    </img>
                    <img className="palmImg" src="assets/palm 1.png" alt="palm"></img>
                    <h1 className="groupTitle">Group Tour</h1>
                    <div className="container-fluid containerGroup mt-5 d-flex gap-3 flex-wrap ">
                        {Data.map((datas) => {
                            let path = `assets/${datas.image}`;
                            return (
                                <Link to='/detailtour'>
                                <div className="container rounded mt-3">
                                    <img src={path} alt="destination"></img>
                                    <h3>
                                        {datas.day}D/{datas.nigth}N {datas.destination}
                                    </h3>
                                    <div className="priceContainer d-flex justify-content-between">
                                        <p>IDR. {datas.price}</p>
                                        <small>{datas.country}</small>
                                    </div>
                                </div>
                                </Link>
                            );
                        })}
                    </div>
                    <Footer />
                </Container>
            </div >
            <Fragment>
                <Route path="/detailtour" exact component={DetailTour} />
            </Fragment>
        </BrowserRouter >
    );
}

export default Main;