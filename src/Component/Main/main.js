import React from "react";
import { Container } from "react-bootstrap";
import "./main.css";
import Data from "../../Data/Data.json";
import Footer from "../Footer/footer";

function Main() {
    return (
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
                        );
                    })}
                </div>
                <Footer />
            </Container>
        </div>
    );
}

export default Main;