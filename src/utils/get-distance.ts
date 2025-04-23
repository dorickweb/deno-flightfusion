export function getDistance(
    originLatitude: number,
    originLongitude: number,
    destinationLatitude: number,
    destinationLongitude: number
): number {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(destinationLatitude - originLatitude);
    const dLon = deg2rad(destinationLongitude - originLongitude);
    const a = getDLatSin(dLat) + getDLatCos(originLatitude, destinationLatitude) * getDLonSin(dLon);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.ceil((R * c) * 0.621371); // km is .621371 % of a mile
}
  
export function deg2rad(degree: number): number {
    return degree * (Math.PI / 180);
}

export function getDLatSin(dLat: number): number {
    return Math.sin(dLat / 2) * Math.sin(dLat / 2) ;
}

export function getDLatCos(
    originLatitude: number,
    destinationLatitude: number,
): number {
    return Math.cos(deg2rad(originLatitude)) * Math.cos(deg2rad(destinationLatitude));
}

export function getDLonSin(dLon: number): number {
    return Math.sin(dLon / 2) * Math.sin(dLon / 2);
}