import React from 'react';
import { useNavContext } from "../../context/nav-context.tsx";

export function NavigationIcon(): React.ReactElement {
    const {
        state,
        showHideNavLinks,
    } = useNavContext();

    return (
        <div className="navigation">
            <div
            className="nav-menu"
            onClick={showHideNavLinks}>
                {!state?.showNavLinks ? (
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    <span className="close">X</span>
                )}
            </div>
        </div>
    )
}
