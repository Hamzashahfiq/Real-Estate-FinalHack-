import React from 'react'
import { Link } from "react-router-dom";

export default function NavigationTab() {
    return (
        <div>
            <ul style={{ textDecoretion: 'none' }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/placeorder">Ordre</Link>
                </li>
            </ul>
        </div>
    )
}
