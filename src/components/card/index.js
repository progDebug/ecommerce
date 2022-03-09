import React from "react";
import "./index.css";
import Card from "./card";
export default function Cards() {
    return(
        <>
            <div className="container-cards">
                <Card title="MORNING" schedules={["6:00 a.m. - ", "13:00 p.m."]} delivery="from 3 GEL" freeWith="FREE WITH ORDER OVER 35 GEL"/>
                <Card title="DAY" schedules={["13:00 a.m. - ", "06:00 p.m."]} delivery="from 6 GEL" freeWith="FREE WITH ORDER OVER 60 GEL"/>
                <Card title="MORNING" schedules={["Order for 1 week or more", ""]} delivery="Everyday delivery" freeWith="DELIVERY FEE/PER WEEK 15 GEL"/>
                <div className="range"></div>
            </div>
        </>
    );
};