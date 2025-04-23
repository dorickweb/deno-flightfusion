import { Airport } from "./airport.ts";
import { Plane } from "./plane.ts";

export interface FlightStatus {
    status: string;
    timestamp: string;
}

export interface FlightRevenueManagement {
    baseFare: number;
    taxes: number;
    billed: boolean;
}

export interface Recurrence {
    enabled: boolean;
    interval: number;
    daysOfWeek: any[],
    weeksOfMonth: any[]
}


export interface FlightRoute {
    originAirport: Airport;
    destinationAirport: Airport;
    _id: string;
    flightNumber: string;
    aircraft: {
        model: string;
        capacity: number;
        registrationNumber: string;
        maxCruiseSpeed: number;
        maxRange: number;
        fuelCapacity: number;
        _id: string;
    },
    departureTime: string;
    arrivalTime: string;
    flightTime: number;
    distance: number;
    status: string;
    flightStatusUpdates: FlightStatus[];
    revenueManagement: FlightRevenueManagement;
    customersBooked: number;
    recurrence: Recurrence;
}

export interface AirLineInfo {
    _id: string;
    name: string;
    flightRoutes: FlightRoute[],
    flightIds: any[],
    airportDestinations: any[],
    airportHubs: any[],
    aircraft: Plane[];
    budget: number;
}