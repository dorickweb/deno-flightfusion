import React from 'react';
import { content } from "../resources/content.ts";
import { getCurrentWeather } from "../routes/get-current-weather.ts";

export function Home(): React.ReactElement {
    const [weather, setWeather] = React.useState<string>('Loading...');
    
    React.useEffect(() => {
        getCurrentWeather()
            .then(() => {
                setWeather('Sunny, 25°C')
            })
    }, []);

    return (
        <>
            <div className="home">
                <div className='weather'>
                    <p>{`${content['home-weather']}: ${weather}`}</p>
                </div>
            </div>
        </>
    )
}
