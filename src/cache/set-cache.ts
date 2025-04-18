import { createClient } from "redis";


export function setCacheResponse<T>(
    key: string,
    value: T,
): void {
    const handleSet = async () => {
        const client = createClient();
        // await fetch(`http://localhost:5000/set/${key}`, { value });
        // await fetch(`http://localhost:5000/set/${key}`, {
        //     method: "POST",
        //     body: { value }
        // });
    };
}