import { TOKEN } from "../token.ts";

export interface AIRLINE {
    airlineId: string;
    airlineName: string;
    iat: number;
    user: string;
}


export function getAircraft(): AIRLINE | undefined {
    try {
        const parts = TOKEN.split('.');

        if (parts.length !== 3) {
          throw new Error('Invalid token format');
        }

        const airline: AIRLINE = JSON.parse(atob(parts[1]));
        return airline;
      } catch (error) {
        console.error('Error getting airline Id:', error);
      }

      return undefined;
}

export function getAircraftId(): string | undefined {
    const aircraft = getAircraft();
    return aircraft
        ? aircraft.airlineId
        : undefined;
}