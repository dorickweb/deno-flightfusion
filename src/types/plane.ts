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