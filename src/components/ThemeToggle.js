import React from 'react'

export const ThemeToggle = ({changeTheme, darkmode}) => {
    return (
        <div className='theme-toggle'>
            Darkmode
            <div id="switch" className={darkmode ? '': 'flex-end'} onClick={changeTheme}>
                <div id="toggle" />
            </div>
        </div>
    )
}
