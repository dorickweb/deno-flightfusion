import { Tabs } from "./tabs.ts";

export enum NavLinks {
    Home = 'home',
    About = 'about',
    AirlineInfo = 'info',
    Planes = 'planes',
    Schedule = 'schedule',
    Airports = 'airports',
    Refresh = 'refresh',
}

export interface NavLink {
    name: string;
    location: string,
    selected: boolean,
}

export const navLinks: Record<NavLinks, Tabs> = {
    [NavLinks.Home]: Tabs.HOME_TAB,
    [NavLinks.About]: Tabs.ABOUT_TAB,
    [NavLinks.AirlineInfo]: Tabs.INFO,
    [NavLinks.Planes]: Tabs.PLANES_TAB,
    [NavLinks.Schedule]: Tabs.SCHEDULE,
    [NavLinks.Airports]: Tabs.AIRPORTS,
    [NavLinks.Refresh]: Tabs.REFRESH_TAB
};