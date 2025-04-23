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
