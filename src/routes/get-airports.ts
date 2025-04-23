import { TOKEN } from "../token.ts";
import { routes } from "./routes.ts";
import { getAircraftId } from "../utils/aircraft.ts";
import { Airport, AirportResponse } from "../types/airport.ts";
import { sortAirportsByCountry } from "../utils/sort.ts";

export async function getAllAirports(): Promise<Airport[]> {
    try {
        const route = routes['getAirports'];
        // console.log(getAircraftId());

        const response = await fetch(`${route}?page=1&limit=100`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${TOKEN}`,
            },
        });
        const results: AirportResponse = response.status === 200
            ? await response.json()
            : [];
    
        const sortedAirportsData = (results?.data ?? []).sort(sortAirportsByCountry);
        return sortedAirportsData ?? [];
    } catch (error) {
        console.error(`Error getting list of airports: ${error}`);
    }

    return [];
}