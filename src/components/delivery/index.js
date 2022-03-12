import React from "react";
import Deliverymen from "../../assets/images/deliveryman.png";
import "./index.css";
import Button from "../button";
import Carrinho from "../../assets/images/carrinho.png";
import Medalha from "../../assets/images/medalha.png";
import VinteQuatro from "../../assets/images/24.png";
import Prancheta from "../../assets/images/prancheta.png";

export default function Delivery() {
    return(
        <>
            <div className="container-delivery">
                <div className="container-img">
                    <img src={Deliverymen} alt="Deliveryman" className="deliveryman img"></img>
                    <div className="text">
                        <h3>How it works?</h3>
                        <h1>We deliver anytime,<br /> everywhere in tblisi</h1>
                        <p>If you food lover, our service is for you.<br></br> Delicius food anytime, everywhere.</p>
                        <div className="buttons">  
                            <Button title="OUR TARIFFS" type="dark" marg="10px"/>
                            <Button title="VIEW MENU" type="light" marg="10px"/>
                        </div>
                    </div>
                </div>
                <div className="container-buttons">
                    <div className="button-card carrinho">
                        <img src={Carrinho} alt="Shopping cart"></img>
                        <h3>Order Online</h3>
                    </div>
                    <div className="button-card medalha">
                        <img src={Medalha} alt="Chefs"></img>
                        <h3>Order super chefs</h3>
                    </div>
                    <div className="button-card vinte-quatro">
                        <img src={VinteQuatro} alt="24 hours 7 days week"></img>
                        <h3>24/7 delivery</h3>
                    </div>
                    <div className="button-card prancheta">
                        <img src={Prancheta} alt="Prancheta"></img>
                        <h3>Sheduled delivery</h3>
                    </div>
                </div>
            </div>
        </>
    );
};