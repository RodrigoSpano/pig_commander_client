import React from 'react';
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch';
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch';

function AppSettings() {
  return (
    <div className='bg-white rounded-md shadow-md p-6'>
      <h1 className='text-xl lg:text-2xl font-bold text-regularPink'>
        App Settings
      </h1>

      <section>
        <h1 className='text-gray-700 text-lg font-semibold'>Language:</h1>
        <LanguageSwitch />
      </section>

      <section>
        <h1 className='text-gray-700 text-lg font-semibold'>Mode:</h1>
        <ThemeSwitch />
      </section>
    </div>
  );
}

export default AppSettings;
