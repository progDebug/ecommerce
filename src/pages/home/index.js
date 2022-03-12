import React from "react";
import Footer from "../../components/footer";
import Chefs from "../../components/chefs";
import Cards from "../../components/card";
import Outdoor from "../../components/outdoor";
import Header from "../../components/header/index.js";
import Jumbotron from "../../components/jumbotron/index.js";
import CardCarrosel from "../../components/cardsCarrosel/index.js";
import Delivery from "../../components/delivery";
import "./index.css";
import ScreenSmall from "../../components/screen-small/index.js";

export default function Home() {
    return(
        <>
            <div className="container-valid" id="container-valid">
                <Header />
                <Jumbotron />
                <Delivery />
                <Outdoor />
                <Cards />
                <CardCarrosel />
                <Chefs />
                <Footer />
            </div>
            <div className="container-invalid" id="container-invalid">
                <ScreenSmall />   
            </div>
        </>
    );
};