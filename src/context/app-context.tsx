import React, { ReactElement, useCallback, useContext, useState } from "react";
import { Tabs } from "../types/tabs.ts";
import { IAppContext, IAppState } from "./context.ts";
import { Plane } from "../types/plane.ts";

const AppContext = React.createContext({} as IAppContext);
export default AppContext;

export function initializeAppContextProvider() {

    function AppContextProviderWrapper({ children }: { children: ReactElement; }) {
        const defaultState: IAppState =  {
            airplanes: [],
            selectedTab: Tabs.ABOUT_TAB,
        };

        const [appState, setAllState] = useState(defaultState);

        const updateState = useCallback(
            (partialState: Partial<IAppState>) => {
                setAllState((previousState: IAppState) => ({
                    ...previousState,
                    ...partialState,
                }));
            },
            [setAllState],
        );

        function addPlanes(plane: Plane): void {
            const planesList = appState.airplanes.concat(plane);
            updateState({ airplanes: planesList });
        }

        function setSelectedTab(tab: Tabs): void {
            updateState({ selectedTab: tab });
        }

        const appContextValue: IAppContext = {
            appState,
            updateState,
            addPlanes,
            setSelectedTab,
        };

        return (
            <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>
        );
    }

    return AppContextProviderWrapper;
}

export function useAppContext() {
    return useContext(AppContext);
}