import React from 'react'
import Image from 'next/image';
import SavingGoalsImage from '../../../utils/Images/Features Images/SavingGoals.png';

const SavingGoalsEs = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={SavingGoalsImage} alt='Record Expenses' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Metas de Ahorros</h2>
                <p className='text-gray-600'>
                Establece metas de ahorro alcanzables y realiza un seguimiento de tu progreso. Pig Commander te mantendrá motivado a medida que te acerques cada vez más a tus objetivos financieros.
                </p>
            </div>
        </>
    )
}

export default SavingGoalsEs