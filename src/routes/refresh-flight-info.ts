import { TOKEN } from "../token.ts";
import { routes } from "./routes.ts";
import { getAircraftId } from "../utils/aircraft.ts";
import { AirLineInfo, FlightRoute } from "../types/flight.ts";

export async function refreshFlightInfo(): Promise<void> {
    try {
        const route = routes['getAirlineInfo'];
        const response = await fetch(`${route}${getAircraftId()}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${TOKEN}`,
            },
        });
        const results: AirLineInfo = response.status === 200
            ? await response.json()
            : undefined;
        
        if(results) {
            const flightsToUpdate = getFlightsToUpdate(results);
            if(flightsToUpdate?.length > 0) {
                // update refresh route
                
            }
        }

    } catch (error) {
        console.error(`Error getting list of airports: ${error}`);
    }
}

export function getFlightsToUpdate(results: AirLineInfo): string[] {
    const updateUs = results?.flightRoutes.filter(flightStatusNotLanded)
        .map(flight => flight._id);
    
    return updateUs;
}

export function flightStatusNotLanded(flight: FlightRoute): boolean {
    return flight.flightStatusUpdates.pop()?.status === 'Landed';
}