import { TOKEN } from "../token.ts";
import { formatNumber } from "../utils/formatter.ts";
import { routes } from "./routes.ts";
import { getAircraftId } from "../utils/aircraft.ts";

export interface Plane {
    _id?: string;
    model?: string;
    manufacturer?: string;
    yearMade?: number;
    capacity?:  number;
    registrationNumber?: string;
    maxCruiseSpeed?: number;
    maxRange?: number;
    fuelCapacity?: number;
    cost?: number;
}

function sortPlanesByPrice(
    a: Plane,
    b: Plane,
){
    if ((a.cost ?? 0) < (b.cost ?? 0)) {
        return -1;
    }

    if ((a.cost ?? 0) > (b.cost ?? 0)) {
        return 1;
    }

    return 0;
};

export function mapPlaneNames(planes: Plane[]): string[] {
    const sortedPlanes = planes.sort(sortPlanesByPrice);
    return sortedPlanes.map(plane => (
        `${plane.manufacturer ?? ''} ${plane.model ?? ''}: $${formatNumber(plane.cost ?? 0)}`
    )).filter(plane => !(plane.trim() === ''));
}

export async function getAllPlanes(): Promise<string[]> {
    try {
        const route = routes['getPlanes'];
        // console.log(getAircraftId());

        // if (!cachedResponse) {
            const response = await fetch(route, {
                method: "GET",
                headers: {
                  "Authorization": `Bearer ${TOKEN}`,
                },
            });
            const results: Plane[] = response.status === 200
                ? await response.json()
                : [];
        
            const mappedPlanes = mapPlaneNames(results);
            return mappedPlanes;
        // }
    } catch (error) {
        console.error(`Error getting list of planes: ${error}`);
    }

    return [];
}