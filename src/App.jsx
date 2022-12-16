import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './styles/animations.css';
import './styles/App.css'

export default function App(props) {
    function onClick() {
        props.model.closeProfileMenu();
    }

    return (
        <div className="app" onClick={onClick}>
            <Outlet />
        </div>
    )
}
