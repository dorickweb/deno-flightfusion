import React from "react";
import { Header } from "./header.tsx";
import { Planes } from "./planes.tsx";
import { initializeAppContextProvider } from "../context/app-context.tsx";
import { Navigation } from "./navigation/navigation.tsx";
import { Airports } from "./airports.tsx";

export function Container(): React.ReactElement {
    const AppContextProvider = initializeAppContextProvider();

    return (
        <AppContextProvider>
            <div className="container">
                <Navigation />
                {/* <Header /> */}
                <Planes />
                {'------------------------------------------------------------------------------'}
                <Airports />
            </div>
        </AppContextProvider>
    )
}
