import React from "react";
import Cards from "../../components/card";
import Outdoor from "../../components/outdoor";
import Delivery from "../../components/delivery/index.js";
import Header from "../../components/header/index.js";
import Jumbotron from "../../components/jumbotron/index.js";

export default function Home() {
    return(
        <>
            <Header />
            <Jumbotron />
            <Delivery />
            <Outdoor />
            <Cards />
        </>
    );
};