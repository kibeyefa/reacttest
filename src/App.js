import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Overview from './components/Overview';


function App() {
    const [darkmode, setDarkmode] = useState(false);

    const changeTheme = () => {
        setDarkmode(!darkmode);
        document.body.classList.toggle('dark');
    };
    return (
        <>
            <Header changeTheme={changeTheme} darkmode={darkmode} />
            <div className="app">
                <Main />
                <Overview />
            </div>
        </>
    );
}

export default App;
