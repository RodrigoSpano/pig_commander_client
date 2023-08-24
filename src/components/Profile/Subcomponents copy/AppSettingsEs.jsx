import React from 'react';
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch';
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch';

function AppSettingsEs() {
  return (
    <div className='bg-white dark:bg-mediumGrayDarkMode rounded-md shadow-md p-6'>
      <h1 className='text-xl lg:text-2xl font-bold text-regularPink'>
        Configuaración de la App
      </h1>
      <div className='flex gap-10'>

      <section>
        <h1 className='text-gray-700 dark:text-white text-lg font-semibold'>Idioma:</h1>
        <LanguageSwitch />
      </section>

      <section>
        <h1 className='text-gray-700 text-lg dark:text-white font-semibold'>Tema:</h1>
        <ThemeSwitch />
      </section>
      </div>
    </div>
  );
}

export default AppSettingsEs;
