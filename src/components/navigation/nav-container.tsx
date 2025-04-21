import React from 'react';
import { NavigationIcon } from "./nav-icon.tsx";
import { NavigationLinks } from "./nav-links.tsx";

export function NavigationContainer(): React.ReactElement {
    return (
        <div>
            <NavigationIcon />
            <NavigationLinks />
        </div>
    )
}
