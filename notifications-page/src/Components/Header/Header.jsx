import React from "react";
import './Header.css';

function Header() {
    return (
        <div className="wrapper">
            <div className="header-wrapper">
                <div>
                    <h2>Notifications <span className="number">3</span></h2>
                </div>
                <div><h3>Mark all as read</h3></div>
            </div>
        </div>
    );
}

export default Header;