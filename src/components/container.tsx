import React from "react";
import { Header } from "./header.tsx";
import { Planes } from "./planes.tsx";
import { initializeAppContextProvider, useAppContext } from "../context/app-context.tsx";
import { Navigation } from "./navigation/navigation.tsx";
import { Airports } from "./airports.tsx";
import { Tabs } from "../types/tabs.ts";
import { getAirlineInfo } from "../routes/get-airline-info.ts";
import { getDistance } from "../utils/get-distance.ts";
import { getFlightRoutes } from "../routes/get-flight-routes.ts";

export function Container(): React.ReactElement {
    const { 
        appState: {
            selectedTab,
        }
    } = useAppContext();

    React.useEffect(() => {
        getFlightRoutes()
            .then(results => {
                console.log(results);
            })
    }, []);

    return (
        <div className="container">
            <Navigation />
            {/* <Header /> */}
            {selectedTab === Tabs.HOME_TAB && (
                <div>{'View Your Home'}</div>
                // <Home />
            )}
            {selectedTab === Tabs.ABOUT_TAB && (
                <div>{'View Your About'}</div>
                // <About />
            )}
            {selectedTab === Tabs.PLANES_TAB && (
                <Planes /> 
            )}
            {selectedTab === Tabs.FLIGHTS_TAB && (
                <div>{'View Flights'}</div>
                // <Airports />
            )}
        </div>
    )
}
