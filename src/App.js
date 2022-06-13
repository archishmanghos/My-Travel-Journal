import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Data from "./Data";

export default function App(){

    const dataElements=Data.map(eachData=>{
        return <Card
                    coverImg={eachData.coverImg}
                    country={eachData.country}
                    googleLocation={eachData.googleLocation}
                    title={eachData.title}
                    startDate={eachData.startDate}
                    endDate={eachData.endDate}
                    details={eachData.details}
                />
    })

    return (
        <div>
            <Navbar/>
            {dataElements}
            <Footer/>
        </div>
    )
}