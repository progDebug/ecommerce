import React from "react";
import Dishe from "./dishe";
import "./index.css";

export default function CardCarrossel() {
    const go = () =>{
        document.querySelector(".itens").scrollBy(-300,0);
    };
    const back = () =>{
        document.querySelector(".itens").scrollBy(300,0);
    };
    return(
        <>
            <div className="container">
                <div className="window">
                    <div className="buraco">
                        <div className="itens-wrapper">
                            <div className="itens">
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
                                    <div className="seta" onClick={go}></div>
                                    <div className="seta2" onClick={back}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};