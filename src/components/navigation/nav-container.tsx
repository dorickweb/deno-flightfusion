import React from 'react';
import { useNavContext } from "../../context/nav-context.tsx";
import { NavigationIcon } from "./nav-icon.tsx";
import { NavigationLinks } from "./nav-links.tsx";

export function NavigationContainer(): React.ReactElement {
    const {
        state,  
    } = useNavContext();

    return (
        <div>
            <NavigationIcon />
            {state?.showNavLinks && (<NavigationLinks />)}
        </div>
    )
}
