import React from "react";
import { getContent } from "../resources/content.ts";

export function Header(): React.ReactElement {
    return (
        <h2>{getContent('app-header')}</h2>
    )
}
