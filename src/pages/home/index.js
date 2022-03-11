import React from "react";
import Cards from "../../components/card";
import Outdoor from "../../components/outdoor";
import Header from "../../components/header/index.js";
import Jumbotron from "../../components/jumbotron/index.js";
import CardCarrosel from "../../components/cardsCarrosel/index.js";

export default function Home() {
    return(
        <>
            <Header />
            <Jumbotron />
            <Outdoor />
            <Cards />
            <CardCarrosel />
        </>
    );
};