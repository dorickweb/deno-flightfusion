import React from "react";
import { Header } from "./header.tsx";
import { Planes } from "./planes.tsx";
import { initializeAppContextProvider, useAppContext } from "../context/app-context.tsx";
import { Navigation } from "./navigation/navigation.tsx";
import { Airports } from "./airports.tsx";
import { Tabs } from "../types/tabs.ts";

export function Container(): React.ReactElement {
    const { 
        appState: {
            selectedTab,
        }
    } = useAppContext();

    return (
        <div className="container">
            <Navigation />
            {/* <Header /> */}
            {selectedTab === Tabs.HOME_TAB && (
                <div>{'View Home'}</div>
            )}
            {selectedTab === Tabs.ABOUT_TAB && (
                <div>{'View ABOUT'}</div>
            )}
            {selectedTab === Tabs.PLANES_TAB && (
                <div>{'View Planes'}</div>
                // <Planes /> 
            )}
            {selectedTab === Tabs.FLIGHTS_TAB && (
                <div>{'View FLIGHTS'}</div>
                // Airports
            )}
        </div>
    )
}
