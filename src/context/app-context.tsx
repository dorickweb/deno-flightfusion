import React, { ReactElement, useCallback, useContext, useState } from "react";
import { Plane } from "../routes/get-planes.ts";

export interface IAppContext {
    state?: IAppState;
    updateState: (partialState: Partial<IAppState>) => void;
    addPlanes: (plane: Plane) => void;
}

export interface IAppState {
    airplanes: Plane[],
}

const AppContext = React.createContext({} as IAppContext);

export default AppContext;

export function initializeAppContextProvider() {

    function AppContextProviderWrapper({ children }: { children: ReactElement; }) {
        const defaultState: IAppState =  {
            airplanes: [],
        };

        const [state, setAllState] = useState(defaultState);

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
            const planesList = state.airplanes.concat(plane);
            updateState({ airplanes: planesList });
        }

        const appContextValue: IAppContext = {
            state,
            updateState,
            addPlanes,
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