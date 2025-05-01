import { TOKEN } from "../constants.ts";
import { routes } from "./routes.ts";
import { getAircraftId } from "../utils/aircraft.ts";
import { AirLineInfo } from "../types/flight.ts";

export async function getAirlineInfo(): Promise<AirLineInfo> {
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
            : [];
        
        return results;

    } catch (error) {
        console.error(`Error getting list of airports: ${error}`);
    }

    return {} as AirLineInfo;
}