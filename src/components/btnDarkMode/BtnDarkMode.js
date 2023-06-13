import React, { useEffect } from 'react';

import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import './btnDarkMode.css';

import sum from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';


const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMpde', detectDarkMode());

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');      // без useRef
        } else {
            document.body.classList.remove('dark');   // без useRef
        }

    }, [darkMode]);

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
            const newColorScheme = event.matches ? "dark" : "light";
            setDarkMode(newColorScheme);
        });
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

    return (
        <button 
            className={darkMode === 'dark'? btnActive : btnNormal} 
            onClick={() => toggleDarkMode()}
        >
            <img src={sum} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
};

export default BtnDarkMode;