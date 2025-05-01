import { TOKEN } from "../constants.ts";
import { routes } from "./routes.ts";
import { FlightRoute } from "../types/flight.ts";

export async function getFlightRoutes(): Promise<FlightRoute[]> {
    try {
        const route = routes['getFlightRoutes'];
        const response = await fetch(`${route}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${TOKEN}`,
            },
        });
        const results: FlightRoute[] = response.status === 200
            ? await response.json()
            : [];
        
        return results;

    } catch (error) {
        console.error(`Error getting list of current flights: ${error}`);
    }

    return [];
}
