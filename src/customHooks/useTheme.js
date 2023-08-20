import { useEffect } from "react";

export const LIGHT_MODE = 'light';
export const DARK_MODE = 'dark';

const useTheme = () => {
    // leo el que está guardado
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    useEffect(() => {
        // cuando el usuario no tiene tema guardado, lo seteo por defecto en light
        if (!localStorage.getItem('theme')) localStorage.setItem('theme', LIGHT_MODE);
        else localStorage.setItem('theme', theme);
    }, [theme]);

    const updateTheme = (theme) => setTheme(theme);

    return ({
        currentTheme,
        updateTheme,
    });
}

export default useTheme;