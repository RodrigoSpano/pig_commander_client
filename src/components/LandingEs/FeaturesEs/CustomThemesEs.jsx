import React from 'react'
import Image from 'next/image';
import Dashboard from '../../../utils/Images/Features Images/Dashboard.png';


const CustomThemesEs = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={Dashboard} alt='Record Expenses' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Temas Personalizados</h2>
                <p className='text-gray-700 dark:text-lightGrey'>
                Personaliza tu experiencia en Pig Commander seleccionando temas personalizados con nuestra suscripción. Adapta la apariencia de la aplicación según tu estilo y preferencias.
                </p>
            </div>
        </>
    )
}

export default CustomThemesEs