import { Airport } from "../types/airport.ts";
import { Plane } from "../types/plane.ts";

export function sortAirportsByCountry(a: Airport, b: Airport){
    if ((a.country ?? 0) < (b.country ?? 0)) { return -1; }
    if ((a.country ?? 0) > (b.country ?? 0)) { return 1; }
    return 0;
};

export function sortPlanesByPrice(a: Plane, b: Plane){
    if ((a.cost ?? 0) < (b.cost ?? 0)) { return -1; }
    if ((a.cost ?? 0) > (b.cost ?? 0)) { return 1; }
    return 0;
};
