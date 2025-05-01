import React from "react";
import { Planes } from "./planes.tsx";
import { useAppContext } from "../context/app-context.tsx";
import { Navigation } from "./navigation/navigation.tsx";
import { Airports } from "./airports.tsx";
import { Tabs } from "../types/tabs.ts";
import { Home } from "./home.tsx";
import { About } from "./about.tsx";
import { getAirlineInfo } from "../routes/get-airline-info.ts";
import { getDistance } from "../utils/get-distance.ts";
import { getFlightRoutes } from "../routes/get-flight-routes.ts";
import { Schedule } from "./schedule.tsx";
import { Info } from "./info.tsx";

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
                <Home />
            )}
            {selectedTab === Tabs.ABOUT_TAB && (
                <About />
            )}
            {selectedTab === Tabs.PLANES_TAB && (
                <Planes /> 
            )}
            {selectedTab === Tabs.AIRPORTS && (
                <Airports />
            )}
            {selectedTab === Tabs.INFO && (
                <Info />
            )}
            {selectedTab === Tabs.SCHEDULE && (
                <Schedule />
            )}
        </div>
    )
}
