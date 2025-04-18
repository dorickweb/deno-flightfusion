import React from 'react';
import { useNavContext } from "../../context/nav-context.tsx";

export enum NavLinks {
    Home = 'home',
    Planes = 'planes',
    Flights = 'flights',
    About = 'about',
}

export interface NavLink {
    name: string;
    location: string,
    selected: boolean,
}

export const navLinks = new Map<NavLinks, string>([
    [NavLinks.Home, ''],
]);


export function NavigationLinks(): React.ReactElement {
    const {
        state,
        showHideNavLinks,
    } = useNavContext();

    return (
        <div>
            {'Nav links'}
        </div>
    )
}
