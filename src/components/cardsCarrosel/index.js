import React from "react";
import Dishe from "./dishe";
import "./index.css";
import ArrowLeft from "../../assets/images/arrow-left.png";
import ArrowRight from "../../assets/images/arrow-right.png";

export default function CardCarrossel() {
    const go = () =>{
        document.querySelector(".itens").scrollBy(-300,0);
    };
    const back = () =>{
        document.querySelector(".itens").scrollBy(300,0);
    };
    return(
        <>
            <h1 className="popular">Popular Dishes</h1>
            <div className="container">
            <div className="range"></div>
                <div className="window">
                    <div className="buraco">
                        <div className="itens-wrapper">
                            <div className="itens">
                                <div className="range"></div>
                                <div className="item">
                                    <Dishe title="PORK WITH ANANAS" price="18 GEL" description="Mexican dish"/>
                                    <Dishe title="SPICY BURGUER" description="Burguer with pork" price="15 GEL"/>
                                    <Dishe title="RASPBERRY PIE" description="Pie with raspberry and mint" price="7 GEL"/>
                                </div>
                                <div className="item">
                                    <Dishe title="PORK WITH ANANAS" price="18 GEL" description="Mexican dish"/>
                                    <Dishe title="SPICY BURGUER" description="Burguer with pork" price="15 GEL"/>
                                    <Dishe title="RASPBERRY PIE" description="Pie with raspberry and mint" price="7 GEL"/>
                                </div>
                                <div className="setas">
                                    <img src={ArrowLeft} alt="Arrow left" onClick={go} className="arrow-left"></img>
                                    <img src={ArrowRight} alt="Arrow Right" onClick={back} className="arrow-right"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};