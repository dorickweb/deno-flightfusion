import { NavLinks } from "../types/navigation.ts";

export interface INavContext {
    state?: INavState;
    updateState: (partialState: Partial<INavState>) => void;
    handleRefresh: () => Promise<void>;
    showHideNavLinks: () => void;
    selectNavLink: (link: NavLinks) => void;
}

export interface INavState {
    selectedTab: string;
    showNavLinks: boolean;
    selectedNavLink: NavLinks;
}