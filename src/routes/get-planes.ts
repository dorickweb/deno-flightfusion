import { TOKEN } from "../token.ts";
import { formatNumber } from "../utils/formatter.ts";
import { routes } from "./routes.ts";
import { Plane } from "../types/plane.ts";
import { sortPlanesByPrice } from "../utils/sort.ts";

export function mapPlaneNames(planes: Plane[]): string[] {
    return planes.sort(sortPlanesByPrice).map(plane => (
        `${plane.manufacturer ?? ''} ${plane.model ?? ''}: $${formatNumber(plane.cost ?? 0)} - ${plane._id ?? ''}`
    )).filter(plane => !(plane.trim() === ''));
}

export async function getAllPlanes(): Promise<string[]> {
    try {
        const route = routes['getPlanes'];
        // console.log(getAircraftId());

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
    } catch (error) {
        console.error(`Error getting list of planes: ${error}`);
    }

    return [];
}