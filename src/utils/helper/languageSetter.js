export const setLanguage = (language) => {
    localStorage.setItem('language', language);
  };
  
  export const getLanguage = () => {
    return localStorage.getItem('language') || 'en'; // 'en' por defecto o el último idioma seleccionado
  };