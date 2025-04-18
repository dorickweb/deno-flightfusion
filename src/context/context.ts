import { Plane } from "../routes/get-planes.ts";
import { Tabs } from "../types/tabs.ts";

export interface IAppContext {
    appState: IAppState;
    updateState: (partialState: Partial<IAppState>) => void;
    addPlanes: (plane: Plane) => void;
    setSelectedTab: (tab: Tabs) => void;
}

export interface IAppState {
    airplanes: Plane[],
    selectedTab: Tabs;
}