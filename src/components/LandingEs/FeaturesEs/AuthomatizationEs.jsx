import React from 'react'
import Image from 'next/image';
import AutomationofMonthlyExpenses from '../../../utils/Images/Features Images/AutomationofMonthlyExpenses.png';

const AuthomatizationEs = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Automatización de los Gastos Mensaules</h2>
                <p className='text-gray-700 dark:text-lightGrey'>
                Di adiós a la tarea repetitiva de ingresar manualmente tus gastos mensuales. Pig Commander te permite automatizar el registro de gastos recurrentes, como salario, alquiler, suscripciones y más, para que nunca pierdas un compromiso financiero.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={AutomationofMonthlyExpenses} alt='Savings and Investment' width={400} height={400} />
            </div>
        </>
    )
}

export default AuthomatizationEs