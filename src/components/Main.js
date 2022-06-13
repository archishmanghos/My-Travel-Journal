import React from "react";
import Card from "./Card";
import Data from "../Data";

export default function Main(){
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
            {dataElements}
        </div>
    )
}