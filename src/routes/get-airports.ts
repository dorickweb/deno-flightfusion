import { TOKEN } from "../token.ts";
import { routes } from "./routes.ts";
import { getAircraftId } from "../utils/aircraft.ts";

export interface AirportResponse {
    data: Airport[];
    page: number;
    perPage: number;
    totalAirports: number;
    totalPages: number;
}

export interface Airport {
    _id: string;
    name: string;
    city: string;
    country: string;
    IATACode: string;
    ICAOCode: string;
    longitude: number;
    latitude: number;
    terminals: AirportTerminal[],
    fuelPrices: AirportFuelPrice[],
    landingFees: AirportLandingFee[],
}

export interface AirportTerminal {
    terminal: string;
    numberOfGates: number;
}

export interface AirportFuelPrice {
    fuelType: string;
    pricePerGallon: number;
}

export interface AirportLandingFee {
    description: string;
    fee:number;
}

function sortAirportsByCountry(
    a: Airport,
    b: Airport,
){
    if ((a.country ?? 0) < (b.country ?? 0)) {
        return -1;
    }

    if ((a.country ?? 0) > (b.country ?? 0)) {
        return 1;
    }

    return 0;
};

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