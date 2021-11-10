import React from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header = ({ changeTheme, darkmode }) => {
    return (
        <header>
            <div className="container">
                <div className="top">
                    <h3>Social Media dashboard</h3>
                    <p>Total Followers: 23,004</p>
                </div>

                <ThemeToggle changeTheme={changeTheme} darkmode={darkmode} />
            </div>
        </header>
    );
};

export default Header;
