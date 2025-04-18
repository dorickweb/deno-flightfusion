import React, { useEffect } from 'react';
import { getContent } from '../resources/content.ts';
import { Airport, getAllAirports } from "../routes/get-airports.ts";

export function Airports(): React.ReactElement {
    const [airports, setAirports] = React.useState<Airport[]>([]);

    useEffect(() => {
        getAllAirports()
            .then(response => {
                setAirports(response)
            });
    }, []);

    return (
        <>
            <h2>{getContent('airports-header')}</h2>
            <ul className="planeList">{airports.map(airport => (
                <li key={airport._id} className="plane">
                    {`${airport.name}`}<br />{airport.city} - {airport.country}<br />{airport._id}
                    <p>
                    {airport.fuelPrices.map(fuel => (
                        <span>{`${fuel.fuelType} - ${fuel.pricePerGallon}`}</span>
                    ))}
                    </p>
                </li>
            ))}</ul>
        </>
    )
}
