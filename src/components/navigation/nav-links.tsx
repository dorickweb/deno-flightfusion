import React from 'react';
import { useNavContext } from "../../context/nav-context.tsx";
import { NavLinks, navLinks } from "../../types/navigation.ts";
import { Tabs } from "../../types/tabs.ts";
import { useAppContext } from "../../context/app-context.tsx";

export function NavigationLinks(): React.ReactElement {
    const {
        setSelectedTab,
    } = useAppContext();

    const {
        state,
        showHideNavLinks,
    } = useNavContext();

    const links = Object.keys(navLinks);
    
    function handleSelectedTab(tab: Tabs): void {
        setSelectedTab(tab);
    }

    return (
        <div>
            {links.map(link => (
                <div
                key={`${link}_key`}
                onClick={() => handleSelectedTab(navLinks[link as NavLinks] as Tabs)}>
                    {navLinks[link as NavLinks]}
                </div>
            ))}
        </div>
    )
}
