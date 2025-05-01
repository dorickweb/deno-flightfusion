import React from 'react';
import { content } from "../resources/content.ts";

export function About(): React.ReactElement {

    return (
        <>
            <div className='about'>
                <h2>{content['about-title']}</h2>
                <p>{content['airports-about-p1']}</p>
                <p>{content['airports-about-p2']}</p>
                <p>{content['airports-about-p3']}</p>
                <p>{content['airports-about-p4']}</p>
                <p>{content['airports-about-p5']}</p>
            </div>
        </>
    )
}
