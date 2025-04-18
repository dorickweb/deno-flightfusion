import React, { useEffect } from 'react';
import { getContent } from '../resources/content.ts';
import { getAllPlanes, Plane } from "../routes/get-planes.ts";

export function Planes(): React.ReactElement {
    const [planes, setPlanes] = React.useState<string[]>([]);

    useEffect(() => {
        getAllPlanes()
            .then(response => setPlanes(response));
    }, []);

    return (
        <>
            <h2>{getContent('planes-header')}</h2>
            <ul className="planeList">{planes.map(plane => (
                <li key={plane} className="plane">{`${plane}`}</li>
            ))}</ul>
        </>
    )
}
