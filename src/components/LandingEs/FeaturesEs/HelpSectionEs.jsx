import React from 'react'
import Image from 'next/image';
import Faq from '../../../utils/Images/Features Images/Faq.png';



const HelpSectionEs = () => {
    return (
        <>

            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Sección de Ayuda</h2>
                <p className='text-gray-700 dark:text-lightGrey'>
                Encuentra respuestas a tus preguntas y obtén soporte en nuestra sección de ayuda y preguntas frecuentes. Estamos aquí para ayudarte en cada paso del camino.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={Faq} alt='Record Expenses' width={400} height={400} />
            </div>
        </>
    )
}

export default HelpSectionEs