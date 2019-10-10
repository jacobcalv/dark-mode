import React from 'react'
import useLocalStorage from './useLocalStorage'


export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', '');
    
    return (
        <div>
            <button>click</button>
        </div>
    )
}
