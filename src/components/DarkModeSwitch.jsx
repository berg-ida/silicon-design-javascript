import React, { useState, useEffect} from 'react'

const DarkModeSwitch = () => {

    // koden för darkmode-switchen är delvis lånad av chat-gpt

const [isDarkMode, setIsDarkMode] = useState(() => {
    const hasDarkmode = localStorage.getItem('darkmode');
    if (hasDarkmode === 'on') return true;
    if (hasDarkmode === 'off') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
});

useEffect(() => {
    if (isDarkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}, [isDarkMode]);

const handleToggle = () => {
    setIsDarkMode(prevMode => {
        const newMode = !prevMode;
        localStorage.setItem('darkmode', newMode ? 'on' : 'off');
        return newMode;
    });
};

const enableDarkMode = () => {
    document.documentElement.classList.add('dark');
};

const disableDarkMode = () => {
    document.documentElement.classList.remove('dark');
};

    // slut av lånad kod

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
        <span className="label">Dark mode</span>
        <label htmlFor="darkmode-switch" aria-label="darkmode switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleToggle}/>
            <span className="slider round"></span>
        </label>
    </div>
  )
}

export default DarkModeSwitch
