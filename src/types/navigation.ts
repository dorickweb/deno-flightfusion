import { Tabs } from "./tabs.ts";

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

export const navLinks: Record<NavLinks, Tabs> = {
    [NavLinks.Home]: Tabs.HOME_TAB,
    [NavLinks.Planes]: Tabs.PLANES_TAB,
    [NavLinks.Flights]: Tabs.FLIGHTS_TAB,
    [NavLinks.About]: Tabs.ABOUT_TAB,
};