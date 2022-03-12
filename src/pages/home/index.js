import React from "react";
import Footer from "../../components/footer";
import Chefs from "../../components/chefs";
import Cards from "../../components/card";
import Outdoor from "../../components/outdoor";
import Header from "../../components/header/index.js";
import Jumbotron from "../../components/jumbotron/index.js";
import CardCarrosel from "../../components/cardsCarrosel/index.js";
import Delivery from "../../components/delivery";

export default function Home() {
    return(
        <>
            <Header />
            <Jumbotron />
            <Delivery />
            <Outdoor />
            <Cards />
            <CardCarrosel />
            <Chefs />
            <Footer />
        </>
    );
};