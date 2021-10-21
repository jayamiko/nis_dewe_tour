import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Component/Header/header";
import Main from "../Component/Main/main";

function Home() {
    return (
        <div>
            <Container fluid className="px-0 mt-5 ">
                <Header />
            </Container>
            <Main />
        </div>
    );
}

export default Home;