import React, { ReactElement, useCallback, useContext, useState } from "react";
import { NavLinks } from "../types/navigation.ts";
import { INavContext, INavState } from "./nav-context.ts";

const NavContext = React.createContext({} as INavContext);
export default NavContext;

export function initializeNavContextProvider() {

    function NavContextProviderWrapper({ children }: { children: ReactElement; }) {
        const defaultState: INavState =  {
            selectedTab: '',
            showNavLinks: false,
            selectedNavLink: NavLinks.About,
        };

        const [state, setAllState] = useState(defaultState);

        const updateState = useCallback(
            (partialState: Partial<INavState>) => {
                setAllState((previousState: INavState) => ({
                    ...previousState,
                    ...partialState,
                }));
            },
            [setAllState],
        );
        
        function showHideNavLinks(): void {
            updateState({
                showNavLinks: !state.showNavLinks
            })
        }
        
        function selectNavLink(link: NavLinks): void {
            updateState({
                selectedNavLink: link
            })
        }

        const appContextValue: INavContext = {
            state,
            updateState,
            showHideNavLinks,
            selectNavLink,
        };

        return (
            <NavContext.Provider value={appContextValue}>{children}</NavContext.Provider>
        );
    }

    return NavContextProviderWrapper;
}

export function useNavContext() {
    return useContext(NavContext);
}