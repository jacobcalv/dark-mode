import React, {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'


export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', '');

    useEffect(() => {
        if (darkMode === true){
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darkMode])
    return [darkMode, setDarkMode]
}
