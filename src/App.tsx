import React from "react";
import { initializeAppContextProvider } from "./context/app-context.tsx";
import { Container } from "./components/container.tsx";

function App(): React.ReactElement {
    const AppContextProvider = initializeAppContextProvider();

    return (
        <AppContextProvider>
            <Container />
        </AppContextProvider>
    )
}


export default App