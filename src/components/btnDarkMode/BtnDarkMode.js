import React, { useEffect, useRef } from 'react';

import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import './btnDarkMode.css';

import sum from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';


const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMpde', detectDarkMode());
    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');      // без useRef
            btnRef.current.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark');   // без useRef
            btnRef.current.classList.remove('dark-mode-btn--active');
        }

    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }

    return (
        <button className="dark-mode-btn" onClick={() => toggleDarkMode()} ref={btnRef}>
            <img src={sum} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
};

export default BtnDarkMode;