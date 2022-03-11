import React from "react";
import "./dishe.css";
import Button from "../button/index.js";
import Image from "../../assets/images/pork-with-pineapple.jpeg";

export default function Dishe(props) {
    return(
        <>
            <div className="dishes">
                <img className="image-dishe" alt="Imagem of dishe" src={Image}></img>
                <div className="about-dishe">
                    <h3 className="name-dishe">{props.title}</h3>
                    <h3 className="description">{props.description}</h3>
                    <h3>{props.price}</h3>
                </div>
                <Button title="ORDER" type="light"/>
            </div>
        </>
    );
};