import React from 'react';
import { initializeNavContextProvider } from "../../context/nav-context.tsx";
import { NavigationContainer } from "./nav-container.tsx";

export function Navigation(): React.ReactElement {
    const NavContextProvider = initializeNavContextProvider();

    return (
        <NavContextProvider>
            <NavigationContainer />
        </NavContextProvider>
    )
}
