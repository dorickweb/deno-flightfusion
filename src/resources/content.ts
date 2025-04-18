export const content: Record<string, string> = {
    'app-title': 'Pluh Airlines',
    'app-header': 'Welcome to Pluh Airlines',
    'planes-header': 'All Available Planes for Pluh Airlines',
    'airports-header': 'All Available Airports for Pluh Airlines',
}

export function getContent(key: string): string {
    return content[key] ?? '';
}
